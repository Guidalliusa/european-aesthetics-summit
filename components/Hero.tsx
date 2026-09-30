import Img from "./Img";
import { TicketLink } from "./ui";
import { Letters } from "./motion";
import { EVENT_DATE, EVENT_LOCATION, EVENT_TAGLINE, EVENT_TIME } from "@/config/event";

/** Letras distribuídas por toda a largura do bloco do título (alinha com "Advanced"). */
function Spread({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={`flex justify-between ${className}`} style={{ ["--d" as string]: `${delay}ms` }}>
      {[...text].map((c, i) => (
        <span key={i}>{c === " " ? " " : c}</span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      {/* Alfama e o Tejo com o sol no horizonte: à direita no desktop, em cima no telemóvel */}
      <div className="hero-photo absolute inset-x-0 top-0 -z-20 h-[60svh] lg:inset-y-0 lg:left-auto lg:h-auto lg:w-[62%]">
        <div className="hero-media absolute inset-0">
          <Img
            name="lisboa-alfama"
            alt="Alfama, Lisboa: a Igreja de Santo Estêvão e o rio Tejo com o sol no horizonte"
            fill
            preload
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="object-cover object-[30%_40%] lg:object-[36%_50%]"
          />
        </div>
        {/* Veladura quente: aproxima a foto do tom dourado da marca */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#3a1d08]/30 mix-blend-multiply" />
      </div>
      {/* Topo escurecido para a navegação; base a fundir no preto */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/70 to-transparent" />

      {/* Brilho quente atrás da Raquel, alinhado com o sol da foto */}
      <div
        aria-hidden="true"
        className="hero-glow-in absolute top-[4svh] -z-10 hidden h-[60svh] w-[46rem] -translate-x-1/4 rounded-full bg-[radial-gradient(closest-side,rgb(214_176_106/0.16),transparent)] lg:left-[max(50%,calc((100%-1320px)/2+720px))] lg:block"
      />
      {/* Raquel Guidalli em palco (foto real, só o fundo removido): entre o título e Lisboa */}
      <div
        className="hero-figure-in hero-figure absolute right-[-8vw] top-[8svh] -z-10 aspect-[585/1131] h-[50svh] sm:right-[2vw] lg:bottom-0 lg:right-auto lg:top-[11svh] lg:h-auto lg:left-[max(50%,calc((100%-1320px)/2+720px))]"
      >
        <Img
          name="raquel-palco"
          alt="Raquel Guidalli, fundadora e organizadora, em palco com microfone"
          fill
          preload
          sizes="(min-width: 1024px) 420px, 60vw"
          className="object-contain object-top"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[46svh] bg-gradient-to-t from-ink via-ink/85 to-transparent lg:h-40 lg:via-ink/40" />


      {/* Curva dourada sob a foto */}
      <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full lg:block">
        <defs>
          <linearGradient id="arcR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#D6B06A" stopOpacity="0" />
            <stop offset="0.35" stopColor="#D6B06A" stopOpacity="0.8" />
            <stop offset="1" stopColor="#D6B06A" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path className="arc-draw" d="M760 555 C 990 690, 1230 800, 1440 872" stroke="url(#arcR)" strokeWidth="1.2" fill="none" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="shell flex flex-1 flex-col justify-end pb-12 pt-32 lg:justify-center lg:pb-16 lg:pt-36">
        <div className="lg:pl-[1vw]">
          <p className="hero-in eyebrow flex items-center gap-5 text-champagne" style={{ ["--d" as string]: "150ms" }}>
            {EVENT_LOCATION.city} · {EVENT_LOCATION.country}
            <span aria-hidden="true" className="h-px w-16 bg-gradient-to-r from-champagne to-champagne/30 sm:w-28 lg:w-44" />
          </p>

          <h1 id="hero-title" className="mt-7 text-[clamp(2.9rem,13.2vw,5.6rem)] lg:mt-9 lg:text-[clamp(4.25rem,8vw,8.5rem)]">
            <span className="sr-only">
              European Advanced Aesthetics Summit {EVENT_DATE.year}
            </span>
            <span aria-hidden="true" className="block w-fit">
              <span
                className="hero-in block pl-[0.1em] text-[0.2em] font-medium uppercase leading-none tracking-[0.5em] text-ivory"
                style={{ ["--d" as string]: "250ms" }}
              >
                European
              </span>
              <span className="mt-[0.16em] block whitespace-nowrap font-display font-light uppercase leading-[0.9] tracking-[-0.03em]">
                <Letters text="Advanced" className="hero-letters gold-letters" />
              </span>
              <Spread
                text="Aesthetics Summit"
                delay={900}
                className="hero-in mt-[0.2em] text-[0.34em] font-normal uppercase leading-none text-ivory"
              />
              <span
                className="hero-in mt-[0.3em] flex items-center gap-[0.5em] text-[0.3em] font-light leading-none text-ivory"
                style={{ ["--d" as string]: "1050ms" }}
              >
                <span className="h-px flex-1 bg-gradient-to-r from-champagne/0 to-champagne/80" />
                <span className="tracking-[0.42em] [margin-right:-0.42em]">{EVENT_DATE.year}</span>
                <span className="h-px flex-1 bg-gradient-to-l from-champagne/0 to-champagne/80" />
              </span>
            </span>
          </h1>

          <p
            className="hero-in mt-7 max-w-md text-[1.3rem] lg:max-w-none font-normal italic leading-snug text-ivory/90 lg:mt-9 lg:text-[1.75rem]"
            style={{ ["--d" as string]: "1200ms" }}
          >
            {EVENT_TAGLINE}
          </p>

          <dl
            className="hero-in mt-9 grid grid-cols-2 gap-x-6 gap-y-6 sm:flex sm:items-center sm:gap-0 lg:mt-12"
            style={{ ["--d" as string]: "1350ms" }}
          >
            <div className="flex items-center gap-3.5 sm:pr-8 lg:pr-10">
              <dt className="sr-only">Data</dt>
              <dd className="font-display text-[3.25rem] font-light leading-none tracking-[-0.04em] text-ivory lg:text-[4rem]">
                {EVENT_DATE.day}
              </dd>
              <dd className="text-[0.875rem] font-normal uppercase leading-snug tracking-[0.14em] text-ivory/90 lg:text-[1rem]">
                {EVENT_DATE.month}
                <br />
                {EVENT_DATE.year}
              </dd>
            </div>
            <div className="border-l border-champagne/45 pl-6 sm:px-8 lg:px-10">
              <dt className="sr-only">Horário</dt>
              <dd className="text-[1.125rem] font-normal leading-snug tracking-[0.06em] text-ivory lg:text-[1.375rem]">
                {EVENT_TIME.start}
                <br />
                às {EVENT_TIME.end}
              </dd>
            </div>
            <div className="col-span-2 border-champagne/45 sm:border-l sm:pl-8 lg:pl-10">
              <dt className="sr-only">Local</dt>
              <dd className="text-[1.125rem] font-medium leading-tight text-ivory lg:text-[1.375rem]">{EVENT_LOCATION.venue}</dd>
              <dd className="mt-1.5 whitespace-pre-line text-[0.875rem] leading-snug text-ivory/75 lg:text-[0.9375rem]">
                {EVENT_LOCATION.venueDetail.replace(" e Vale", "\ne Vale")}
              </dd>
            </div>
          </dl>

          <div
            className="hero-in mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10 lg:mt-12"
            style={{ ["--d" as string]: "1500ms" }}
          >
            <TicketLink
              size="lg"
              className="w-full shadow-[0_14px_40px_-16px_rgb(214_176_106/0.7)] sm:w-auto sm:px-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
