import { panelPillars } from "@/data/topics";
import { Letters, Words } from "./motion";

/** Hélice e ligações moleculares em traço fino: ciência sem imagem de laboratório. */
function Helix() {
  const points = Array.from({ length: 25 }, (_, i) => i);
  const y = (i: number) => i * 40;
  const xa = (i: number) => 150 + Math.sin(i * 0.52) * 110;
  const xb = (i: number) => 150 - Math.sin(i * 0.52) * 110;
  const path = (fx: (i: number) => number) =>
    points.map((i) => `${i === 0 ? "M" : "L"}${fx(i).toFixed(1)} ${y(i)}`).join(" ");
  return (
    <svg viewBox="0 0 300 960" fill="none" aria-hidden="true" className="h-full w-auto">
      <path d={path(xa)} stroke="currentColor" strokeWidth="1" />
      <path d={path(xb)} stroke="currentColor" strokeWidth="1" />
      {points.map((i) => (
        <g key={i}>
          <line x1={xa(i)} y1={y(i)} x2={xb(i)} y2={y(i)} stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          <circle cx={xa(i)} cy={y(i)} r="2.2" fill="currentColor" />
          <circle cx={xb(i)} cy={y(i)} r="2.2" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

export default function SpecialPanel() {
  return (
    <section aria-labelledby="painel-title" className="section-y relative isolate overflow-hidden bg-ink">
      <div aria-hidden="true" data-reveal="up" style={{ ["--d" as string]: "150ms" }} className="pointer-events-none absolute -right-10 top-0 -z-10 h-full md:right-[6vw]">
        <div className="h-full rotate-[14deg] text-champagne opacity-[0.11]">
          <Helix />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -z-20 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(214_176_106/0.10),transparent)]"
      />

      <div className="shell">
        <p data-reveal className="eyebrow flex items-center gap-4 text-champagne">
          Painel especial
        </p>

        <h2
          id="painel-title"
          className="mt-10 cursor-default font-display text-[clamp(2.3rem,7.6vw,6.75rem)] font-light uppercase leading-[0.98]"
        >
          <span data-reveal="up" style={{ ["--d" as string]: "50ms" }} className="block">
            <Letters text="Saúde," />
          </span>
          <span data-reveal="up" style={{ ["--d" as string]: "130ms" }} className="block">
            <Letters text="Péptidos" />
          </span>
          <span data-reveal="up" style={{ ["--d" as string]: "210ms" }} className="block whitespace-nowrap">
            <span className="font-normal normal-case italic text-champagne">&amp;</span> <Letters text="Longevidade" />
          </span>
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <p data-reveal style={{ ["--d" as string]: "325ms" }} className="eyebrow leading-loose text-muted lg:col-span-4">
            Ciência · Informação · Bem-estar · Resultados
          </p>
          <p className="max-w-xl font-display text-[1.25rem] font-light leading-snug text-ivory/90 md:text-[1.5rem] lg:col-span-7 lg:col-start-6">
            <Words
              delay={375}
              step={20}
              segments={[
                "Um encontro com profissionais para esclarecer dúvidas, partilhar conhecimento e discutir o futuro da saúde e da longevidade.",
              ]}
            />
          </p>
        </div>

        <ul data-reveal="stagger" style={{ ["--step" as string]: "84ms" }} className="mt-20 grid border-t border-champagne/20 sm:grid-cols-2 lg:mt-28 lg:grid-cols-3">
          {panelPillars.map((p, i) => (
            <li
              key={p}
              style={{ ["--i" as string]: i }}
              className="group flex items-baseline gap-5 border-b border-champagne/20 py-7 sm:pr-8 lg:py-9 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:pl-8 lg:[&:nth-child(2n)]:border-l-0 lg:[&:nth-child(2n)]:pl-0 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:pl-8"
            >
              <span className="text-[0.75rem] font-semibold tabular-nums tracking-[0.14em] text-champagne">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.0625rem] font-normal leading-snug text-ivory transition-[color,translate] duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1.5 group-hover:text-champagne">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
