import { topics } from "@/data/topics";
import { Words } from "./motion";

export default function Topics() {
  return (
    <section id="temas" aria-labelledby="temas-title" className="on-light section-y bg-ivory text-ink">
      <div className="shell">
        {/* Cabeçalho centrado: formato diferente do Programa (que tem o título fixo à esquerda) */}
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal className="eyebrow text-bronze-deep">
            Temas
          </p>
          <h2 id="temas-title" className="mt-8 font-display text-[clamp(2.1rem,4.6vw,3.9rem)] font-light leading-[1.08]">
            <Words delay={75} segments={["Diferentes perspetivas. ", ["Um mesmo futuro.", "italic text-bronze-deep"]]} />
          </h2>
          <p data-reveal style={{ ["--d" as string]: "300ms" }} className="mx-auto mt-8 max-w-md text-[1.0625rem] font-normal leading-relaxed text-stone">
            Dez eixos que atravessam o programa, da prática profissional à carreira internacional.
          </p>
        </div>

        {/* Grelha de 10 blocos com filetes: 2 colunas no telemóvel e tablet, 5 no desktop */}
        <ol
          data-reveal="stagger"
          style={{ ["--step" as string]: "70ms", ["--d" as string]: "100ms" }}
          className="mt-14 grid grid-cols-2 border-l border-t border-bronze/30 md:mt-20 lg:grid-cols-5"
        >
          {topics.map((t, i) => (
            <li
              key={t}
              style={{ ["--i" as string]: i }}
              className="group relative flex min-h-[8.5rem] flex-col justify-between gap-5 border-b border-r border-bronze/30 p-4 sm:min-h-[10rem] sm:p-6 transition-colors duration-500 hover:bg-ivory-2 lg:min-h-[13rem] lg:p-7"
            >
              <span className="font-display text-[2rem] font-light leading-none tracking-[-0.04em] sm:text-[2.5rem] text-bronze-deep transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:-translate-y-1 lg:text-[2.75rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.9375rem] font-normal leading-snug text-ink sm:text-[1.0625rem]">{t}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-bronze-deep transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
