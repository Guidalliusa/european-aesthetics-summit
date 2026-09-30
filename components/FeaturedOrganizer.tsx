import Img from "./Img";
import { InstagramLink, TicketLink } from "./ui";
import { INSTAGRAM } from "@/config/event";
import { Letters, Words } from "./motion";
import { organizer } from "@/data/speakers";

export default function FeaturedOrganizer() {
  return (
    <section aria-labelledby="organizadora-title" className="relative overflow-hidden bg-ink">
      <div className="grid lg:grid-cols-12">
        {/* Fotografia: quase metade do ecrã, sangra até à margem e abre como cortina */}
        <div
          data-reveal="image"
          className="relative aspect-[4/5] max-h-[85svh] w-full overflow-hidden lg:col-span-5 lg:aspect-auto lg:max-h-none lg:min-h-[640px]"
        >
          <Img
            name="raquel-organizadora"
            alt="Raquel Guidalli, organizadora do European Advanced Aesthetics Summit 2026"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover object-top"
          />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink to-transparent" />
          <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-ink lg:block" />
        </div>

        <div className="relative flex items-center lg:col-span-7">
          <div className="relative w-full px-[max(1.25rem,5vw)] pb-16 pt-4 lg:pb-20 lg:pt-28 lg:pl-[6vw] xl:pr-[max(5vw,calc((100vw-1320px)/2))]">
            <p data-reveal className="eyebrow flex items-center gap-4 text-champagne">
              Fundadora e organizadora
            </p>
            <h2
              id="organizadora-title"
              className="mt-8 cursor-default font-display text-[clamp(2.9rem,7vw,6rem)] font-light uppercase leading-[0.95]"
            >
              <span data-reveal="up" style={{ ["--d" as string]: "75ms" }} className="block">
                <Letters text="Raquel" />
              </span>
              <span data-reveal="up" style={{ ["--d" as string]: "160ms" }} className="block font-normal normal-case italic text-champagne">
                <Letters text="Guidalli" />
              </span>
            </h2>

            <div data-reveal="line" style={{ ["--d" as string]: "250ms" }} className="mt-12 h-px w-full max-w-md bg-champagne/35" />

            <div className="mt-10 max-w-md">
              <p data-reveal style={{ ["--d" as string]: "300ms" }} className="eyebrow text-muted">
                Conferência
              </p>
              <p className="mt-4 font-display text-[1.5rem] font-normal italic leading-snug text-ivory md:text-[1.875rem]">
                <Words delay={350} step={42} segments={[`“${organizer.topic}”`]} />
              </p>
              <p data-reveal style={{ ["--d" as string]: "500ms" }} className="mt-8 text-base leading-relaxed text-ivory/70">
                Organizadora do European Advanced Aesthetics Summit 2026, encontro que reúne em Lisboa profissionais da
                estética, da saúde e da inovação.
              </p>
            </div>

            <div data-reveal style={{ ["--d" as string]: "575ms" }} className="mt-12 flex flex-wrap items-center gap-3">
              <TicketLink variant="outline" />
              <InstagramLink {...INSTAGRAM.raquel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
