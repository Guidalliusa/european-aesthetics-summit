import { TicketLink } from "./ui";
import { Words } from "./motion";
import { EVENT_DATE, EVENT_LOCATION, EVENT_NAME, EVENT_TIME, TICKET_PRICE } from "@/config/event";

export default function FinalCTA() {
  const [euros, cents] = TICKET_PRICE.label.replace("€", "").split(",");
  return (
    <section id="ingresso" aria-labelledby="ingresso-title" className="section-y relative isolate overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-30%] left-1/2 -z-10 h-[70vw] max-h-[900px] w-[110vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgb(214_176_106/0.13),transparent)]"
      />
      <div className="shell text-center">
        <p data-reveal className="eyebrow text-champagne">{EVENT_NAME}</p>
        <h2
          id="ingresso-title"
          className="mx-auto mt-10 max-w-[18ch] font-display text-[clamp(2.2rem,5.6vw,4.75rem)] font-light leading-[1.08]"
        >
          <Words delay={75} segments={["O futuro da estética ", ["encontra-se em Lisboa.", "italic text-champagne"]]} />
        </h2>

        {/* Bilhete */}
        <div data-reveal style={{ ["--d" as string]: "350ms" }} className="relative mx-auto mt-16 max-w-3xl overflow-hidden rounded-[28px] border border-champagne/25 bg-ink-2/60 text-left md:mt-20">
          <span aria-hidden="true" className="ticket-sheen absolute inset-x-8 top-0 h-px" />
          <div className="grid md:grid-cols-[1fr_auto]">
            <div className="p-7 md:p-10">
              <p className="eyebrow text-muted">Bilhete</p>
              <p className="mt-5 font-display text-[1.5rem] font-light leading-tight text-ivory">{EVENT_DATE.short}</p>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ivory/70">
                {EVENT_TIME.label} · {EVENT_LOCATION.venue}
              </p>
            </div>
            <div className="relative flex items-end border-t border-dashed border-champagne/25 p-7 md:items-center md:border-l md:border-t-0 md:p-10">
              <p className="font-display font-light leading-none text-ivory">
                <span className="sr-only">Preço: {TICKET_PRICE.label}</span>
                <span aria-hidden="true" className="flex items-start">
                  <span className="mt-2 text-[1.75rem] font-light text-champagne md:mt-3 md:text-[2rem]">€</span>
                  <span className="text-[4.5rem] tracking-[-0.05em] md:text-[6rem]">{euros}</span>
                  <span className="mt-2 text-[1.75rem] font-light md:mt-3 md:text-[2rem]">,{cents}</span>
                </span>
              </p>
            </div>
          </div>
          <div className="p-3 pt-0 md:p-4 md:pt-0">
            <TicketLink size="lg" className="w-full" />
          </div>
        </div>

        <p data-reveal style={{ ["--d" as string]: "450ms" }} className="mt-8 text-[0.9375rem] text-ivory/80">
          Vagas limitadas.
        </p>
        <p data-reveal style={{ ["--d" as string]: "500ms" }} className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Entre no grupo oficial do Summit no WhatsApp para garantir o seu lugar e receber todas as informações sobre o evento.
        </p>
      </div>
    </section>
  );
}
