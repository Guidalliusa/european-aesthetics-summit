#!/usr/bin/env bash
# Publica o site no GitHub Pages (ramo gh-pages).
# Uso, na raiz do projeto:  bash scripts/deploy.sh
set -euo pipefail

BASE=/european-aesthetics-summit
REMOTE=$(git remote get-url origin)

MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=$BASE npm run build
touch out/.nojekyll

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
