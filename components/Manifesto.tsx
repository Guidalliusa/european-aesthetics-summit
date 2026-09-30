import Img from "./Img";
import { SPEAKER_COUNT } from "@/data/speakers";
import { Words } from "./motion";

const facts = [
  { value: "01", label: "Dia", note: "de imersão" },
  { value: String(SPEAKER_COUNT).padStart(2, "0"), label: "Oradores", note: "diferentes perspetivas" },
  { value: "Lisboa", label: "Portugal", note: "conexões internacionais", word: true },
];

/** Curva da foto (coordenadas 0–1 da caixa): larga em cima, estreita em baixo. */
const CURVE = "M0.02 0 C 0.2 0.42, 0.46 0.8, 0.9 1";

export default function Manifesto() {
  return (
    <section id="summit" aria-labelledby="manifesto-title" className="on-light relative isolate overflow-hidden bg-ivory text-ink">
      {/* Recorte curvo da foto, reutilizado no telemóvel e no desktop */}
      <svg aria-hidden="true" width="0" height="0" className="absolute">
        <clipPath id="summit-curve" clipPathUnits="objectBoundingBox">
          <path d={`${CURVE} L 1 1 L 1 0 Z`} />
        </clipPath>
      </svg>

      <div className="grid lg:min-h-[min(100svh,860px)] lg:grid-cols-[minmax(0,1fr)_32%]">
        <div className="section-y flex flex-col justify-center pl-[max(1.25rem,5vw,calc((100vw-1320px)/2))] pr-[max(1.25rem,5vw)] lg:pr-12">
          <p data-reveal className="eyebrow flex items-center gap-5 text-bronze-deep">
            <span aria-hidden="true" className="h-px w-10 bg-bronze/60 sm:w-20" />
            O Summit
            <span aria-hidden="true" className="h-px w-16 bg-bronze/60 sm:w-40" />
          </p>

          <div className="mt-10 flex flex-col gap-10 md:mt-12 lg:gap-8">
            <h2
              id="manifesto-title"
              className="max-w-[17ch] font-display text-[clamp(2.5rem,4.7vw,4.6rem)] font-light leading-[1.04] tracking-[-0.035em]"
            >
              <Words
                delay={75}
                segments={["Um encontro entre estética, ", ["ciência", "font-normal italic text-bronze-deep"], " e futuro."]}
              />
            </h2>
            <p
              data-reveal
              style={{ ["--d" as string]: "325ms" }}
              className="max-w-[25rem] border-l border-bronze/40 py-1 pl-6 text-[1.0625rem] leading-[1.75] font-normal text-stone md:ml-auto md:py-3 md:pl-10"
            >
              Um dia de conhecimento, conexões e novas perspetivas para profissionais que acompanham a evolução da
              estética, da saúde, da inovação e da carreira internacional.
            </p>
          </div>

          <div data-reveal="line" className="mt-14 h-px w-full bg-bronze/35 md:mt-20" />
          <dl
            data-reveal="stagger"
            style={{ ["--step" as string]: "117ms", ["--d" as string]: "100ms" }}
            className="grid sm:grid-cols-3"
          >
            {facts.map((f, i) => (
              <div
                key={f.label}
                style={{ ["--i" as string]: i }}
                className={`group flex border-b border-bronze/25 py-7 last:border-b-0 last:pb-0 sm:border-b-0 sm:last:pb-10 sm:py-10 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-bronze/35 sm:[&:not(:first-child)]:pl-6 sm:[&:not(:last-child)]:pr-4 xl:[&:not(:first-child)]:pl-10 xl:[&:not(:last-child)]:pr-8 ${
                  f.word ? "flex-col items-start justify-center gap-2.5" : "items-center gap-5"
                }`}
              >
                <dt>
                  <span className="eyebrow block tracking-[0.22em] text-bronze-deep">{f.label}</span>
                  <span className="mt-1.5 block text-[0.9375rem] leading-snug text-stone">{f.note}</span>
                </dt>
                <dd
                  className={`order-first font-display leading-none text-bronze-deep transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:-translate-y-1.5 ${
                    f.word
                      ? "text-[2.9rem] font-normal italic tracking-[-0.04em] md:text-[clamp(2.4rem,4vw,3.9rem)]"
                      : "text-[4rem] font-light tracking-[-0.06em] md:text-[clamp(3.2rem,5vw,5.5rem)]"
                  }`}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Lisboa à hora dourada, com a ponte 25 de Abril ao fundo */}
        <div
          data-reveal="image"
          className="relative hidden lg:block"
        >
          {/* A cortina da entrada atua neste invólucro; a curva fica no interior */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 [clip-path:url(#summit-curve)]">
              <Img
                name="lisboa-ponte"
                alt="Telhados de Lisboa à hora dourada, com a ponte 25 de Abril e o Tejo ao fundo"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover object-[50%_45%]"
              />
            </div>
            <svg aria-hidden="true" viewBox="0 0 1 1" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
              <path d={CURVE} fill="none" stroke="#9b674c" strokeWidth="1" strokeOpacity="0.7" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
