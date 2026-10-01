import {
  EVENT_ADDRESS,
  EVENT_DATE,
  EVENT_LOCATION,
  EVENT_TAGLINE,
  EVENT_TIME,
  GRUPO_CADO_URL,
  INSTAGRAM,
  LOCATION_URL,
} from "@/config/event";
import { ArrowUpRight, InstagramIcon } from "./ui";
import { Roll } from "./motion";

const social = [INSTAGRAM.raquel, INSTAGRAM.congressos];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/[0.06] bg-ink pb-28 pt-20 md:pb-10 md:pt-24">
      {/* Filete de luz dourada no topo */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />

      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Assinatura do evento */}
          <div className="lg:col-span-5">
            <p className="eyebrow text-champagne">European · {EVENT_DATE.year}</p>
            <p className="mt-5 font-display text-[clamp(2rem,3.4vw,2.9rem)] font-light leading-[1.05] text-ivory">
              Advanced Aesthetics
              <span className="block italic text-champagne">Summit</span>
            </p>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-muted">{EVENT_TAGLINE}</p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:gap-x-10">
            <div>
              <dt className="eyebrow text-[0.6875rem] text-champagne">Data</dt>
              <dd className="mt-4 text-[0.9375rem] leading-relaxed text-ivory/85">
                {EVENT_DATE.day} {EVENT_DATE.month} {EVENT_DATE.year}
                <br />
                {EVENT_TIME.label}
              </dd>
            </div>

            <div>
              <dt className="eyebrow text-[0.6875rem] text-champagne">Local</dt>
              <dd className="mt-4 text-[0.9375rem] leading-relaxed text-ivory/85">
                <address className="not-italic">
                  {EVENT_LOCATION.venue}
                  <br />
                  {EVENT_ADDRESS.street}
                  <br />
                  {EVENT_ADDRESS.postalCode} {EVENT_ADDRESS.locality}
                </address>
                <a
                  href={LOCATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-3 inline-flex items-center gap-2 text-[0.8125rem] font-medium text-ivory transition-colors duration-300 hover:text-champagne"
                >
                  <Roll>Ver localização</Roll>
                  <ArrowUpRight className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only">(abre o Google Maps num novo separador)</span>
                </a>
              </dd>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <dt className="eyebrow text-[0.6875rem] text-champagne">Instagram</dt>
              <dd className="mt-4">
                <ul className="flex flex-col gap-3">
                  {social.map((s) => (
                    <li key={s.handle}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram ${s.handle} (abre num novo separador)`}
                        className="group inline-flex items-center gap-2.5 text-[0.9375rem] text-ivory/85 transition-colors duration-300 hover:text-champagne"
                      >
                        <InstagramIcon className="h-[18px] w-[18px] shrink-0 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:rotate-[-8deg] group-hover:scale-110" />
                        <Roll>{s.handle}</Roll>
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ivory/[0.08] pt-6 text-[0.8125rem] text-muted sm:flex-row sm:items-center sm:justify-between md:mt-20">
          <p className="eyebrow text-[0.625rem] tracking-[0.3em] text-muted">
            {EVENT_LOCATION.city} · {EVENT_LOCATION.country}
          </p>
          <p>
            <span>Design e desenvolvimento: </span>
            <a
              href={GRUPO_CADO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne underline-offset-4 transition-colors duration-300 hover:text-ivory hover:underline"
            >
              Grupo Cado
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
