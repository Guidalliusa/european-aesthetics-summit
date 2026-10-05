#!/usr/bin/env bash
# Publica o site no GitHub Pages (ramo gh-pages).
# Uso, na raiz do projeto:  bash scripts/deploy.sh
set -euo pipefail

# Domínio próprio: o site vive na raiz, sem basePath.
DOMAIN=europeansummit.site
REMOTE=$(git remote get-url origin)

npm run build
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
