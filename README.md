# European Advanced Aesthetics Summit 2026: landing page

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, exportado como site estático.

## Comandos

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera o site estático em out/
```

A pasta `out/` pode ser publicada tal como está (GitHub Pages, Hostinger, Netlify…).
Se o site ficar num subcaminho (ex.: `utilizador.github.io/summit`), fazer o build com
`NEXT_PUBLIC_BASE_PATH=/summit npm run build`.

## Onde editar

| O quê | Ficheiro |
|---|---|
| Links (inscrição/WhatsApp, Google Maps, Grupo Cado, domínio), data, horário, morada, preço | `config/event.ts` |
| Palestrantes, temas das palestras, bios, cerimonial | `data/speakers.ts` |
| Temas do Summit e pilares do painel especial | `data/topics.ts` |
| Logótipos dos parceiros | `data/partners.ts` + ficheiros em `public/logos/` |

Regra: `topic` e `bio` ficam `null` enquanto não houver informação confirmada.

## Imagens

As fotos são pré-otimizadas em WebP por `scripts/process-images.py` (Python + Pillow) a partir de
`assets-src/`, e servidas por um loader próprio (`lib/image-loader.ts`) com `srcset` responsivo.
Para trocar ou acrescentar uma foto: pôr o original em `assets-src/`, acrescentar a linha no script e correr
`python scripts/process-images.py public/images`.

A foto do hero (Praça do Comércio à noite) é do Unsplash (licença Unsplash, uso comercial livre).
