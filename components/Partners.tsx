import { partners } from "@/data/partners";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Partners() {
  return (
    <section aria-labelledby="parceiros-title" className="border-t border-ivory/[0.08] bg-ink">
      <div className="shell py-16 md:py-20">
        <h2 id="parceiros-title" data-reveal className="eyebrow text-center text-muted">
          Parceiros
        </h2>
        <ul
          data-reveal="stagger"
          style={{ ["--step" as string]: "91ms", ["--d" as string]: "75ms" }}
          className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-14 md:mt-12 lg:gap-x-20"
        >
          {partners.map((p, i) => (
            <li key={p.name} style={{ ["--i" as string]: i }} className="flex min-h-20 flex-col items-center justify-center gap-2">
              {p.logo ? (
                // Logótipos pré-tratados (fundo transparente); <img> simples para não passar pelo loader das fotos
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`${basePath}${p.logo}`}
                  alt={p.name}
                  width={p.logoWidth}
                  height={p.logoHeight}
                  loading="lazy"
                  decoding="async"
                  className={`${p.caption ? "h-11 md:h-14" : "h-16 md:h-20"} w-auto max-w-[170px] object-contain opacity-85 transition-[opacity,translate] duration-500 ease-[var(--ease-out-soft)] hover:-translate-y-1 hover:opacity-100 md:max-w-[200px]`}
                />
              ) : null}
              {p.caption && (
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-ivory/55">{p.caption}</span>
              )}
              {!p.logo && (
                <span className="text-center text-[1rem] font-medium leading-tight tracking-[0.02em] text-ivory/60">{p.name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
