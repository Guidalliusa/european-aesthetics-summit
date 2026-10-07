"""
Insere uma Content-Security-Policy em cada página HTML de out/ (corre depois do build, no deploy.sh).

O GitHub Pages não deixa definir cabeçalhos HTTP, por isso a política vai numa <meta http-equiv>.
Os scripts inline do Next mudam a cada build: em vez de 'unsafe-inline', autoriza-se só o hash
SHA-256 de cada um. Qualquer script injetado fora do build é bloqueado (deny by default).

Limites da <meta>: frame-ancestors, report-uri e sandbox são ignorados pelos browsers.

Uso:  python scripts/csp.py out
"""
import base64
import hashlib
import pathlib
import re
import sys

OUT = pathlib.Path(sys.argv[1])

# Scripts executáveis inline (sem src). O JSON-LD não é executado e por isso não precisa de hash.
INLINE = re.compile(r"<script(?![^>]*\bsrc=)(?![^>]*application/ld\+json)[^>]*>(.*?)</script>", re.S)


def policy(hashes):
    scripts = " ".join(f"'sha256-{h}'" for h in sorted(hashes))
    return "; ".join([
        "default-src 'none'",
        f"script-src 'self' {scripts}",
        # atributos style="" (variáveis CSS das animações) e os estilos do Next
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
        "manifest-src 'self'",
        "base-uri 'none'",
        "form-action 'none'",
        "object-src 'none'",
        "upgrade-insecure-requests",
    ])


pages = list(OUT.rglob("*.html"))
if not pages:
    sys.exit("csp.py: nenhuma página HTML em " + str(OUT))

for page in pages:
    html = page.read_text(encoding="utf-8")
    if 'http-equiv="Content-Security-Policy"' in html:
        sys.exit(f"csp.py: {page} já tem CSP (build antigo?)")
    hashes = {
        base64.b64encode(hashlib.sha256(body.encode("utf-8")).digest()).decode()
        for body in INLINE.findall(html)
    }
    meta = (
        f'<meta http-equiv="Content-Security-Policy" content="{policy(hashes)}"/>'
        '<meta name="referrer" content="no-referrer"/>'
    )
    # tem de vir antes de qualquer script: logo a seguir ao <meta charset>
    html, n = re.subn(r"(<meta charSet=\"utf-8\"/>)", r"\1" + meta, html, count=1, flags=re.I)
    if n != 1:
        sys.exit(f"csp.py: não encontrei <meta charset> em {page}")
    page.write_text(html, encoding="utf-8")
    print(f"CSP: {page.relative_to(OUT)} ({len(hashes)} scripts inline)")
