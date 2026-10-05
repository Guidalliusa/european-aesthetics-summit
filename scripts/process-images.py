"""
Gera as imagens otimizadas (WebP em várias larguras) em public/images e o manifest em lib/.

Uso (na raiz do projeto):  python scripts/process-images.py public/images

Fontes em assets-src/:
  fotos/     originais enviados (ipdj-auditorio.webp = auditório IPDJ, 16 = John Feitosa, 17 = Teylon Castro,
             19 = Danny Gomes, 20 = Belinha Cardoso, 22 = Maria Celeste Barreto,
             25 = Gustavo Galves)
  recortes/  fundos removidos com rembg (18 = Raquel Guidalli, 21 = Helena Venceslau)
  lisboa/    fotos Unsplash (licença Unsplash): rsB7CTYCO0Q Alfama com o sol no Tejo (hero), HsGcpxsZfBE vista com a ponte 25 de Abril
"""
import colorsys
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
ASSETS = os.path.join(ROOT, "assets-src")
SRC = os.path.join(ASSETS, "fotos")
CUT = os.path.join(ASSETS, "recortes")
OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
WIDTHS = [480, 800, 1200, 1600, 2400]
manifest = {}


def src(n):
    return Image.open(os.path.join(SRC, f"{n}.jpg")).convert("RGB")


def backdrop(size, center=(0.5, 0.32)):
    """Fundo quente e escuro com luz suave atrás da cabeça (para recortes)."""
    w, h = size
    base = Image.new("RGB", size, (14, 12, 11))
    glow = Image.new("L", size, 0)
    d = ImageDraw.Draw(glow)
    cx, cy = int(w * center[0]), int(h * center[1])
    r = int(max(w, h) * 0.55)
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=255)
    glow = glow.filter(ImageFilter.GaussianBlur(r * 0.45))
    warm = Image.new("RGB", size, (58, 46, 36))
    return Image.composite(warm, base, glow)


def soften(cut):
    """Recolhe 1px da máscara e suaviza a borda, para o recorte não ficar com halo."""
    a = cut.split()[3].filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))
    out = cut.copy()
    out.putalpha(a)
    return out


def on_backdrop(cut, box, center=(0.5, 0.3)):
    """Recorta a região `box` (pode sair da imagem) e compõe sobre o backdrop."""
    cut = soften(cut)
    l, t, r, b = box
    canvas = backdrop((r - l, b - t), center)
    canvas.paste(cut, (-l, -t), cut)
    return canvas


def save(name, im, widths=WIDTHS, quality=80):
    im = im.convert("RGB")
    made = []
    for w in widths:
        if w > im.width:
            continue
        h = round(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(
            os.path.join(OUT, f"{name}-{w}.webp"), "WEBP", quality=quality, method=6
        )
        made.append(w)
    if im.width not in made and (not made or im.width > made[-1]):
        im.save(os.path.join(OUT, f"{name}-{im.width}.webp"), "WEBP", quality=quality, method=6)
        made.append(im.width)
    manifest[name] = {"width": im.width, "height": im.height, "widths": made}
    print(name, im.size, made)


def crop45(im, box):
    return im.crop(box)


# ---------- Recortes (fundos removidos com rembg) ----------
raq = Image.open(os.path.join(CUT, "18_u2net_human_seg.png")).convert("RGBA")
# o resíduo azul do banner fica abaixo da cintura; limpar pixels azulados nessa zona
rp = raq.load()
for y in range(1250, raq.height):
    for x in range(raq.width):
        r, g, b, a = rp[x, y]
        if a and b > r + 25:
            rp[x, y] = (r, g, b, 0)
hel = Image.open(os.path.join(CUT, "21_u2net_human_seg.png")).convert("RGBA")

# ---------- Palestrantes (4:5) ----------
save("raquel-guidalli", on_backdrop(raq, (60, 170, 700, 970), (0.45, 0.28)), [480, 640])
save("raquel-organizadora", on_backdrop(raq, (0, 160, 760, 1110), (0.42, 0.25)), [480, 760])
save("belinha-cardoso", crop45(src(20), (0, 90, 1023, 1369)), [480, 800])
save("maria-celeste-barreto", crop45(src(22), (0, 70, 1023, 1349)), [480, 800])
save("teylon-castro", crop45(src(17), (0, 40, 1024, 1320)), [480, 800])

john = src(16)
pad = Image.new("RGB", (794, 1060), john.getpixel((20, 20)))
pad.paste(john, (0, 60))
save("john-feitosa", pad.crop((0, 0, 794, 992)), [480, 794])

save("helena-venceslau", on_backdrop(hel, (70, 20, 1090, 1295), (0.5, 0.25)), [480, 800])
# Patricia: foto do cartaz individual (57), recortada (isnet) e posta no fundo escuro dos outros recortes
pat = Image.open(os.path.join(CUT, "57_patricia_isnet.png")).convert("RGBA")
save("patricia-benitto", on_backdrop(pat, (15, 10, 485, 597), (0.55, 0.3)), [470])
save("gustavo-galves", crop45(src(25), (220, 60, 800, 785)), [480, 580])
save("danny-gomes", src(19).crop((50, 0, 1055, 1005)), [240, 480])

# ---------- Hero: Raquel em palco (foto original enviada, 52; o alfa de origem tem manchas
# cinzentas a ~120-150 e a pessoa a ~253: só se limpa a máscara, o rosto não é tocado) ----------
palco = Image.open(os.path.join(CUT, "52_raquel_palco_hd.png")).convert("RGBA")
palco = palco.crop(palco.getbbox())
made = []
for w in [480, palco.width]:
    h = round(palco.height * w / palco.width)
    palco.resize((w, h), Image.LANCZOS).save(os.path.join(OUT, f"raquel-palco-{w}.webp"), "WEBP", quality=90, method=6)
    made.append(w)
manifest["raquel-palco"] = {"width": palco.width, "height": palco.height, "widths": made}
print("raquel-palco", palco.size, made)

# ---------- Cartaz oficial (secção do bilhete) + cópia para descarregar ----------
cartaz = Image.open(os.path.join(SRC, "cartaz-oficial.jpg")).convert("RGB")
save("cartaz-oficial", cartaz, [480, 800, cartaz.width], quality=84)
cartaz.save(os.path.join(ROOT, "public", "cartaz-european-aesthetics-summit-2026.jpg"), "JPEG", quality=90, optimize=True)

# ---------- Local ----------
save("ipdj-auditorio", Image.open(os.path.join(SRC, "ipdj-auditorio.webp")).convert("RGB"), [800, 1200, 1672], quality=82)

# ---------- Hero: Alfama e o Tejo com o sol no horizonte (Unsplash rsB7CTYCO0Q) ----------
alfama = Image.open(os.path.join(ASSETS, "lisboa", "rsB7CTYCO0Q.jpg")).convert("RGB")
save("lisboa-alfama", alfama, [800, 1200, 1600, 2400], quality=74)

# ---------- O Summit: telhados e ponte 25 de Abril à hora dourada (Unsplash HsGcpxsZfBE) ----------
tejo = Image.open(os.path.join(ASSETS, "lisboa", "HsGcpxsZfBE.jpg")).convert("RGB")
save("lisboa-ponte", tejo.crop((850, 0, 2425, 2100)), [600, 900, 1200], quality=78)

with open(os.path.join(ROOT, "lib", "image-manifest.json"), "w") as f:
    json.dump(manifest, f, indent=2)
