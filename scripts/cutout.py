"""
Recorte de fundo com o modelo IS-Net (o mesmo do rembg "isnet-general-use"), via onnxruntime direto.
Existe porque o rembg depende do scipy, cujas DLL o Windows passou a bloquear neste PC.

Uso:  python scripts/cutout.py <entrada.jpg> <saida.png>
Modelo: ~/.rembg/models/isnet-general-use/isnet-general-use.onnx
"""
import os
import sys

import numpy as np
import onnxruntime as ort
from PIL import Image

MODEL = os.path.expanduser("~/.rembg/models/isnet-general-use/isnet-general-use.onnx")
SIZE = 1024


def cutout(src, dst):
    im = Image.open(src).convert("RGB")
    x = np.asarray(im.resize((SIZE, SIZE), Image.LANCZOS)).astype(np.float32)
    x = x / max(x.max(), 1e-6) - 0.5  # mesma normalização do rembg (média 0.5, desvio 1)
    x = x.transpose(2, 0, 1)[None]
    sess = ort.InferenceSession(MODEL, providers=["CPUExecutionProvider"])
    pred = sess.run(None, {sess.get_inputs()[0].name: x})[0][0, 0]
    pred = (pred - pred.min()) / (pred.max() - pred.min() + 1e-8)
    mask = Image.fromarray((pred * 255).astype(np.uint8)).resize(im.size, Image.LANCZOS)
    out = im.convert("RGBA")
    out.putalpha(mask)
    out.save(dst)
    print(dst, im.size, out.getbbox())


if __name__ == "__main__":
    cutout(sys.argv[1], sys.argv[2])
