import Img from "./Img";
import { Letters, Words } from "./motion";
import { ceremonialist, speakers } from "@/data/speakers";

export default function Speakers() {
  return (
    <section id="oradores" aria-labelledby="oradores-title" className="section-y bg-ink-2">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p data-reveal className="eyebrow text-champagne">
              Oradores
            </p>
            <h2
              id="oradores-title"
              className="mt-8 max-w-[20ch] font-display text-[clamp(2.1rem,4.6vw,3.9rem)] font-light leading-[1.08]"
            >
              <Words
                delay={75}
                step={38}
                segments={["Vozes que estão a construir o próximo capítulo da ", ["estética", "italic text-champagne"], "."]}
              />
            </h2>
          </div>
        </div>

        {/* 7 oradores: 4 + 3 centrados no desktop (grelha de 8 com cartões de 2); a Raquel tem secção própria acima */}
        <ul className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:mt-24 md:gap-x-8 md:gap-y-16 max-lg:[&>li:last-child:nth-child(odd)]:col-span-2 max-lg:[&>li:last-child:nth-child(odd)]:w-[calc(50%-0.5rem)] max-lg:[&>li:last-child:nth-child(odd)]:justify-self-center sm:max-lg:[&>li:last-child:nth-child(odd)]:w-[calc(50%-0.75rem)] lg:grid-cols-8 lg:gap-x-[2vw] lg:gap-y-20 lg:[&>li]:col-span-2 lg:[&>li:nth-child(5)]:col-start-2 lg:[&>li:nth-child(even)]:translate-y-16 xl:gap-x-8">
          {speakers.map((s, i) => {
            const d = (i % 4) * 80;
            return (
              <li key={s.id} data-reveal="card" style={{ ["--d" as string]: `${d}ms` }} className="group">
                <div className="card-media relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-3"
                >
                  <Img
                    name={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1320px) 310px, (min-width: 1024px) 23vw, 48vw"
                    className="object-cover object-top transition-[scale] duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                  {!s.role.startsWith("Orador") && (
                    <span className="absolute left-4 top-4 rounded-full bg-champagne px-3.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-ink">
                      {s.role}
                    </span>
                  )}
                </div>

                <div className="card-text">
                  <div className="mt-5 flex items-start justify-between gap-4 border-t border-ivory/12 pt-4">
                    <div>
                      <h3 className="text-[1.0625rem] font-medium leading-snug text-ivory transition-colors duration-500 group-hover:text-champagne sm:text-[1.1875rem]">
                        {s.name}
                      </h3>
                      <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                        {s.role}
                      </p>
                    </div>
                    <span aria-hidden="true" className="hidden pt-1.5 text-xs tabular-nums tracking-[0.15em] text-muted sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {s.topic && (
                    <p className="mt-3 max-w-[34ch] text-[0.875rem] italic leading-relaxed text-muted sm:text-[0.9375rem]">
                      “{s.topic}”
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Mestre de cerimónias: bloco próprio, horizontal e compacto, abaixo dos oradores na hierarquia */}
        <div className="mt-20 md:mt-28">
          <div className="grid max-w-[54rem] grid-cols-[34%_1fr] items-center gap-5 rounded-[24px] border border-champagne/20 bg-ink/60 p-2.5 sm:grid-cols-[32%_1fr] sm:gap-10 md:p-3 lg:mx-auto">
            <div data-reveal="image" className="group relative aspect-[4/5] overflow-hidden rounded-[16px] bg-ink-3">
              <Img
                name={ceremonialist.image}
                alt={ceremonialist.name}
                fill
                sizes="(min-width: 900px) 280px, 34vw"
                className="object-cover object-[50%_20%] transition-[scale] duration-[900ms] ease-[var(--ease-out-soft)] group-hover:scale-[1.05]"
              />
            </div>
            <div className="py-2 pr-3 sm:pr-8">
              <p data-reveal className="eyebrow text-[0.6875rem] tracking-[0.24em] text-champagne sm:text-[0.8125rem]">
                Mestre de cerimónias
              </p>
              <div data-reveal="line" style={{ ["--d" as string]: "100ms" }} className="mt-4 h-px w-12 bg-champagne/60 sm:mt-5 sm:w-16" />
              <h3
                data-reveal="up"
                style={{ ["--d" as string]: "150ms" }}
                className="mt-4 cursor-default font-display text-[clamp(1.375rem,3vw,2.25rem)] font-light leading-[1.1] text-ivory sm:mt-5"
              >
                <Letters text="Danny Gomes" />
              </h3>
              <p data-reveal style={{ ["--d" as string]: "225ms" }} className="mt-3 max-w-xs text-[0.875rem] leading-relaxed text-ivory/70 sm:mt-4 sm:text-[1rem]">
                A conduzir o European Advanced Aesthetics Summit 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
