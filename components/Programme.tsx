import { schedule } from "@/data/schedule";
import { organizer } from "@/data/speakers";
import { EVENT_DATE } from "@/config/event";
import { Words } from "./motion";

export default function Programme() {
  const first = schedule[0].start;
  const last = schedule[schedule.length - 1].end;
  return (
    <section id="programa" aria-labelledby="programa-title" className="section-y border-t border-ivory/[0.06] bg-ink">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p data-reveal className="eyebrow text-champagne">
              Programa
            </p>
            <h2 id="programa-title" className="mt-8 font-display text-[clamp(2.1rem,4vw,3.5rem)] font-light leading-[1.08]">
              <Words delay={75} segments={["Um dia, ", ["do primeiro ao último minuto.", "italic text-champagne"]]} />
            </h2>
            <p data-reveal style={{ ["--d" as string]: "300ms" }} className="mt-8 text-[1.0625rem] leading-relaxed text-ivory/75">
              {EVENT_DATE.day} {EVENT_DATE.month} {EVENT_DATE.year}
              <span className="mx-2 text-champagne">·</span>
              {first} às {last}
            </p>
          </div>
        </div>

        {/* Cada linha entra quando chega ao ecrã, como nos temas */}
        <ol className="lg:col-span-8 lg:col-start-5">
          {schedule.map((slot) => {
            const isHost = slot.speaker?.id === organizer.id;
            const name = slot.speaker?.name ?? slot.title;
            return (
              <li key={slot.start} className="group">
                <div data-reveal="line" className="h-px w-full bg-ivory/12" />
                <div
                  data-reveal
                  style={{ ["--d" as string]: "60ms" }}
                  className="grid gap-2 py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-8 md:py-7"
                >
                  <p className="pt-0.5 text-[0.875rem] font-medium tabular-nums tracking-[0.06em] text-champagne">
                    <time>{slot.start}</time>
                    <span className="text-champagne/60"> – </span>
                    <time>{slot.end}</time>
                  </p>
                  <div className="transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:translate-x-2">
                    {slot.kind === "talk" ? (
                      <>
                        <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[1.125rem] font-medium leading-snug text-ivory md:text-[1.25rem]">
                          {name}
                          {isHost && <span className="eyebrow text-[0.625rem] text-champagne">Fundadora e organizadora</span>}
                        </p>
                        {slot.speaker?.topic && (
                          <p className="mt-1.5 max-w-[46ch] text-[0.9375rem] italic leading-relaxed text-ivory/70 md:text-[1rem]">
                            “{slot.speaker.topic}”
                          </p>
                        )}
                      </>
                    ) : (
                      <>
                        <p
                          className={`text-[0.8125rem] font-semibold uppercase leading-snug tracking-[0.2em] ${
                            slot.kind === "break" ? "text-muted" : "text-ivory"
                          }`}
                        >
                          {name}
                        </p>
                        {slot.detail && <p className="mt-1.5 text-[0.9375rem] text-ivory/70">{slot.detail}</p>}
                      </>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
          <li aria-hidden="true">
            <div data-reveal="line" className="h-px w-full bg-ivory/12" />
          </li>
        </ol>
      </div>
    </section>
  );
}
