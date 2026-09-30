import type { CSSProperties, ReactNode } from "react";

/** Segmento de texto: string simples ou [texto, classes] para destacar palavras. */
export type Segment = string | [string, string];

type WordsProps = {
  segments: Segment[];
  /** Atraso base (ms) antes da primeira palavra. */
  delay?: number;
  /** Intervalo entre palavras (ms). */
  step?: number;
  className?: string;
};

/**
 * Título que entra palavra a palavra, cada uma a subir de dentro de uma máscara.
 * Leitores de ecrã recebem o texto inteiro; as palavras animadas ficam aria-hidden.
 */
export function Words({ segments, delay = 0, step = 45, className = "" }: WordsProps) {
  const plain = segments.map((s) => (typeof s === "string" ? s : s[0])).join("");
  let i = 0;
  return (
    <span data-reveal="words" className={className} style={{ ["--d" as string]: `${delay}ms`, ["--step" as string]: `${step}ms` } as CSSProperties}>
      <span className="sr-only">{plain}</span>
      <span aria-hidden="true">
        {segments.map((seg, si) => {
          const [text, cls] = typeof seg === "string" ? [seg, ""] : seg;
          return text.split(/(\s+)/).map((w, wi) => {
            if (!w) return null;
            if (/^\s+$/.test(w)) return " ";
            const idx = i++;
            return (
              <span key={`${si}-${wi}`} className="word">
                <span className={`word-in ${cls}`} style={{ ["--i" as string]: idx } as CSSProperties}>
                  {w}
                </span>
              </span>
            );
          });
        })}
      </span>
    </span>
  );
}

/**
 * Palavra com letras individuais: ao passar o rato, as letras ondulam
 * (uma pequena subida em cascata). Texto acessível intacto.
 */
export function Letters({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`letters ${className}`}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {[...text].map((c, i) => (
          <span key={i} style={{ ["--l" as string]: i } as CSSProperties}>
            {c === " " ? " " : c}
          </span>
        ))}
      </span>
    </span>
  );
}

/** Texto de botão/link que “rola” para cima ao passar o rato, revelando uma cópia. */
export function Roll({ children }: { children: ReactNode }) {
  return (
    <span className="roll">
      <span className="roll-a">{children}</span>
      <span className="roll-b" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
