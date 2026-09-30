import { FlagUS, InstagramLink } from "./ui";
import { INSTAGRAM } from "@/config/event";
import { Letters } from "./motion";

/** Selo circular: texto em anel e a bandeira dos EUA ao centro. */
function Seal() {
  const text = "Certificação internacional · Estados Unidos · ";
  return (
    <div className="relative mx-auto aspect-square w-[min(80vw,400px)]">
      <svg viewBox="0 0 200 200" className="seal-ring absolute inset-0 h-full w-full text-bronze-deep" aria-hidden="true">
        <defs>
          <path id="seal-circle" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0" />
        </defs>
        <text fontSize="10" fill="currentColor" style={{ fontFamily: "var(--font-sans)", fontWeight: 600, textTransform: "uppercase" }}>
          {/* textLength = perímetro do círculo (2π·78), para o anel fechar sem falhas */}
          <textPath href="#seal-circle" textLength="488" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true" fill="none">
        <circle cx="100" cy="100" r="96" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="66" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.6" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <FlagUS className="w-[48%] overflow-hidden rounded-[4px] shadow-[0_10px_30px_-10px_rgb(0_0_0/0.4)]" />
        <span className="text-[0.875rem] font-medium italic tracking-[0.1em] text-bronze-deep">U.S.A.</span>
      </div>
    </div>
  );
}

export default function Certification() {
  return (
    <section aria-labelledby="certificacao-title" className="on-light section-y bg-ivory-2 text-ink">
      <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h2
            id="certificacao-title"
            className="cursor-default font-display text-[clamp(2.1rem,6.2vw,5.25rem)] font-light uppercase leading-[1]"
          >
            <span data-reveal="up" style={{ ["--d" as string]: "60ms" }} className="block">
              <Letters text="Certificação" />
            </span>
            <span data-reveal="up" style={{ ["--d" as string]: "150ms" }} className="block font-normal normal-case italic text-bronze-deep">
              <Letters text="internacional" />
            </span>
          </h2>
          <p data-reveal style={{ ["--d" as string]: "250ms" }} className="mt-10 max-w-md text-lg font-normal leading-relaxed text-stone">
            Uma experiência pensada para ampliar conexões e perspetivas além-fronteiras.
          </p>
          <div data-reveal style={{ ["--d" as string]: "325ms" }} className="mt-10 flex flex-wrap items-center gap-3">
            <p className="inline-flex min-h-11 items-center gap-3.5 rounded-full border border-ink/15 bg-ivory/60 py-2 pl-3 pr-5">
              <FlagUS className="h-5 w-auto overflow-hidden rounded-[3px]" />
              <span className="eyebrow text-[0.6875rem] text-ink">Estados Unidos · Certificação internacional</span>
            </p>
            <InstagramLink {...INSTAGRAM.congressos} tone="light" />
          </div>
        </div>
        <div data-reveal style={{ ["--d" as string]: "200ms" }} className="lg:col-span-4 lg:col-start-9">
          <Seal />
        </div>
      </div>
    </section>
  );
}
