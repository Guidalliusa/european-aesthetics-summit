import { topics } from "@/data/topics";
import { Words } from "./motion";

export default function Topics() {
  return (
    <section id="temas" aria-labelledby="temas-title" className="on-light section-y bg-ivory text-ink">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p data-reveal className="eyebrow flex items-center gap-4 text-bronze-deep">
              Temas
            </p>
            <h2 id="temas-title" className="mt-8 font-display text-[clamp(2.1rem,4vw,3.5rem)] font-light leading-[1.08]">
              <Words delay={75} segments={["Diferentes perspetivas. ", ["Um mesmo futuro.", "italic text-bronze-deep"]]} />
            </h2>
            <p data-reveal style={{ ["--d" as string]: "300ms" }} className="mt-8 max-w-xs text-[1.0625rem] font-normal leading-relaxed text-stone">
              Dez eixos que atravessam o programa, da prática profissional à carreira internacional.
            </p>
          </div>
        </div>

        {/* Cada linha entra quando chega ao ecrã: o scroll dita o ritmo, uma de cada vez */}
        <ol className="lg:col-span-7 lg:col-start-6">
          {topics.map((t, i) => (
            <li key={t} className="group relative cursor-default">
              <div data-reveal="line" className="h-px w-full bg-bronze/35" />
              <div
                data-reveal
                style={{ ["--d" as string]: "60ms" }}
                className="relative flex items-baseline gap-6 py-7 md:gap-10 md:py-9"
              >
                <span className="w-8 shrink-0 text-[0.8125rem] font-semibold tabular-nums tracking-[0.12em] md:w-10 md:text-[0.875rem] text-bronze-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-[1.3125rem] font-light leading-[1.25] tracking-[-0.01em] text-ink transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:translate-x-3 md:text-[clamp(1.5rem,1.9vw,1.875rem)]">
                  {t}
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-2 w-2 shrink-0 self-center rounded-full bg-bronze-deep opacity-0 transition-all duration-500 ease-[var(--ease-out-soft)] group-hover:scale-100 group-hover:opacity-100 md:block md:scale-0"
                />
              </div>
            </li>
          ))}
          <li aria-hidden="true">
            <div data-reveal="line" className="h-px w-full bg-bronze/35" />
          </li>
        </ol>
      </div>
    </section>
  );
}
