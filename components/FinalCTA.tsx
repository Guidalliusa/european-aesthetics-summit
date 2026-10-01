import Img from "./Img";
import { TicketLink } from "./ui";
import { Roll, Words } from "./motion";
import {
  EVENT_DATE,
  EVENT_LOCATION,
  EVENT_NAME,
  EVENT_TIME,
  TICKET_PRICE,
} from "@/config/event";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function FinalCTA() {
  const [euros, cents] = TICKET_PRICE.label.replace("€", "").split(",");
  return (
    <section
      id="ingresso"
      aria-labelledby="ingresso-title"
      className="section-y relative isolate overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-1/2 -z-10 h-[70vw] max-h-[900px] w-[110vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgb(214_176_106/0.13),transparent)]"
      />
      <div className="shell text-center">
        <p data-reveal className="eyebrow text-champagne">
          {EVENT_NAME}
        </p>
        <h2
          id="ingresso-title"
          className="mx-auto mt-10 max-w-[18ch] font-display text-[clamp(2.2rem,5.6vw,4.75rem)] font-light leading-[1.08]"
        >
          <Words
            delay={75}
            segments={[
              "O futuro da estética ",
              ["encontra-se em Lisboa.", "italic text-champagne"],
            ]}
          />
        </h2>

        <div className="mx-auto mt-16 grid max-w-5xl items-center gap-12 md:mt-20 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:gap-14">
          {/* Cartaz oficial: a "foto de grupo" que fecha a página */}
          <figure className="mx-auto w-full max-w-[26rem] lg:max-w-none">
            <div
              data-reveal="image"
              className="relative aspect-[1206/1817] overflow-hidden rounded-[20px] border border-champagne/25 bg-ink-2 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]"
            >
              <Img
                name="cartaz-oficial"
                alt="Cartaz oficial do European Advanced Aesthetics Summit 2026: oradores, 15 de novembro em Lisboa e parceiros"
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 448px) 416px, 90vw"
                className="object-cover"
              />
            </div>
            <figcaption
              data-reveal
              style={{ ["--d" as string]: "200ms" }}
              className="mt-5 flex items-center justify-center gap-3 text-[0.8125rem] text-muted"
            >
              Cartaz oficial
              <span aria-hidden="true" className="h-3 w-px bg-ivory/20" />
              <a
                href={`${basePath}/cartaz-european-aesthetics-summit-2026.jpg`}
                download
                className="group inline-flex items-center gap-2 font-medium text-ivory transition-colors duration-300 hover:text-champagne"
              >
                <Roll>Descarregar</Roll>
                <svg
                  viewBox="0 0 12 14"
                  fill="none"
                  aria-hidden="true"
                  className="h-3.5 w-3 transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-y-0.5"
                >
                  <path
                    d="M6 0v10M2 6l4 4 4-4M0 13h12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </a>
            </figcaption>
          </figure>

          <div>
            {/* Bilhete */}
            <div
              data-reveal
              style={{ ["--d" as string]: "350ms" }}
              className="relative overflow-hidden rounded-[28px] border border-champagne/25 bg-ink-2/60 text-left"
            >
              <span
                aria-hidden="true"
                className="ticket-sheen absolute inset-x-8 top-0 h-px"
              />
              <div className="grid md:grid-cols-[1fr_auto]">
                <div className="p-7 md:p-10">
                  <p className="eyebrow text-muted">Bilhete</p>
                  <p className="mt-5 font-display text-[1.5rem] font-light leading-tight text-ivory">
                    {EVENT_DATE.short}
                  </p>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ivory/70">
                    {EVENT_TIME.label} · {EVENT_LOCATION.venue}
                  </p>
                </div>
                <div className="relative flex items-end border-t border-dashed border-champagne/25 p-7 md:items-center md:border-l md:border-t-0 md:p-10">
                  <p className="font-display font-light leading-none text-ivory">
                    <span className="sr-only">Preço: {TICKET_PRICE.label}</span>
                    <span aria-hidden="true" className="flex items-start">
                      <span className="mt-2 text-[1.75rem] font-light text-champagne md:mt-3 md:text-[2rem]">
                        €
                      </span>
                      <span className="text-[4.5rem] tracking-[-0.05em] md:text-[6rem]">
                        {euros}
                      </span>
                      <span className="mt-2 text-[1.75rem] font-light md:mt-3 md:text-[2rem]">
                        ,{cents}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="p-3 pt-0 md:p-4 md:pt-0">
                <TicketLink size="lg" className="w-full" />
              </div>
            </div>

            <p
              data-reveal
              style={{ ["--d" as string]: "450ms" }}
              className="mt-8 text-[0.9375rem] text-ivory/80 lg:text-left"
            >
              Vagas limitadas.
            </p>
            <p
              data-reveal
              style={{ ["--d" as string]: "500ms" }}
              className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted lg:mx-0 lg:text-left"
            >
              Entre no grupo oficial do Summit no WhatsApp para garantir o seu
              lugar e receber todas as informações sobre o evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
