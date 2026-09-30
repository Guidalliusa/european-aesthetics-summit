import Img from "./Img";
import { ArrowUpRight, FlagPT, pill, pillVariants } from "./ui";
import { Roll, Words } from "./motion";
import { EVENT_ADDRESS, EVENT_DATE, EVENT_LOCATION, EVENT_TIME, LOCATION_URL } from "@/config/event";

export default function Venue() {
  return (
    <section id="local" aria-labelledby="local-title" className="section-y bg-ink-2">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p data-reveal className="eyebrow flex items-center gap-4 text-champagne">
              Local
            </p>
            <h2 id="local-title" className="mt-8 max-w-[16ch] font-display text-[clamp(2.1rem,4.8vw,4rem)] font-light leading-[1.08]">
              <Words delay={75} segments={["Lisboa será o ponto de ", ["encontro", "italic text-champagne"], "."]} />
            </h2>
          </div>
          <p data-reveal style={{ ["--d" as string]: "300ms" }} className="inline-flex items-center gap-3 justify-self-start rounded-full border border-ivory/12 py-2 pl-2.5 pr-4 text-[0.875rem] text-muted lg:col-span-4 lg:justify-self-end">
            <FlagPT className="h-3.5 w-auto overflow-hidden rounded-[2px]" />
            {EVENT_LOCATION.city} · {EVENT_LOCATION.country}
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <figure className="lg:col-span-8">
            <div data-reveal="image" style={{ ["--r" as string]: "20px" }} className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-ink-3 sm:aspect-[16/9]">
              <Img
                name="ipdj-auditorio"
                alt="Auditório do IPDJ Lisboa, com palco e plateia em madeira"
                fill
                sizes="(min-width: 1320px) 860px, (min-width: 1024px) 64vw, 100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
            <figcaption data-reveal style={{ ["--d" as string]: "250ms" }} className="mt-4 flex justify-between gap-4 text-[0.8125rem] tracking-[0.04em] text-muted">
              <span>Auditório · {EVENT_LOCATION.venue}</span>
              <span className="hidden sm:inline">{EVENT_LOCATION.venueDetail}</span>
            </figcaption>
          </figure>

          <div className="flex flex-col lg:col-span-4">
            <dl data-reveal="stagger" style={{ ["--d" as string]: "150ms", ["--step" as string]: "91ms" }} className="grid grid-cols-2 gap-x-6 border-b border-ivory/12 [&>div]:border-t [&>div]:border-ivory/12 [&>div]:py-6">
              <div className="col-span-2" style={{ ["--i" as string]: 0 }}>
                <dt className="eyebrow text-muted">Local</dt>
                <dd className="mt-3">
                  <span className="block font-display text-[1.75rem] font-light leading-none text-ivory">{EVENT_LOCATION.venue}</span>
                  <span className="mt-2 block text-[0.9375rem] leading-relaxed text-ivory/70">{EVENT_LOCATION.venueDetail}</span>
                </dd>
              </div>
              <div className="col-span-2" style={{ ["--i" as string]: 1 }}>
                <dt className="eyebrow text-muted">Morada</dt>
                <dd className="mt-3 text-base leading-relaxed text-ivory">
                  <address className="not-italic">
                    {EVENT_ADDRESS.street}
                    <br />
                    {EVENT_ADDRESS.postalCode} {EVENT_ADDRESS.locality}
                    <br />
                    {EVENT_ADDRESS.country}
                  </address>
                </dd>
              </div>
              <div style={{ ["--i" as string]: 2 }}>
                <dt className="eyebrow text-muted">Data</dt>
                <dd className="mt-3 text-base text-ivory">
                  {EVENT_DATE.day} {EVENT_DATE.month.toLowerCase()} {EVENT_DATE.year}
                </dd>
              </div>
              <div style={{ ["--i" as string]: 3 }}>
                <dt className="eyebrow text-muted">Horário</dt>
                <dd className="mt-3 text-base text-ivory">{EVENT_TIME.label}</dd>
              </div>
            </dl>

            <a
              href={LOCATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ ["--d" as string]: "450ms" }}
              className={`${pill} ${pillVariants.outline} mt-10 px-7 py-3.5 lg:self-start`}
            >
              <Roll>Ver localização</Roll>
              <ArrowUpRight className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="sr-only">(abre o Google Maps num novo separador)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
