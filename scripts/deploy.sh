#!/usr/bin/env bash
# Publica o site no GitHub Pages (ramo gh-pages).
# Uso, na raiz do projeto:  bash scripts/deploy.sh
set -euo pipefail

# Domínio próprio: o site vive na raiz, sem basePath.
DOMAIN=europeansummit.site
REMOTE=$(git remote get-url origin)

npm run build

# Fail securely: nada de segredos, chaves, source maps ou originais no que vai ser público
LEAK=$(find out \( -name ".env*" -o -name "*.map" -o -name "*.pem" -o -name "*.key" -o -path "*assets-src*" \) -print)
if [ -n "$LEAK" ]; then
  echo "Deploy cancelado: ficheiros que não devem ser publicados em out/:" >&2
  echo "$LEAK" >&2
  exit 1
fi

# CSP com hashes dos scripts inline (o GitHub Pages não permite cabeçalhos HTTP)
python scripts/csp.py out

touch out/.nojekyll
echo "$DOMAIN" > out/CNAME

TMP=$(mktemp -d)
cp -r out/. "$TMP"
cd "$TMP"
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C "$OLDPWD" config user.name)" -c user.email="$(git -C "$OLDPWD" config user.email)" \
  commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -q -f "$REMOTE" gh-pages
cd - >/dev/null
rm -rf "$TMP"
echo "Publicado. Pode demorar 1-2 minutos a atualizar."
