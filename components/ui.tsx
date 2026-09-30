import type { ComponentProps, ReactNode } from "react";
import { TICKET_URL } from "@/config/event";
import { Roll } from "./motion";

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 12" fill="none" aria-hidden="true" className={`h-3 w-6 ${className}`}>
      <path d="M0 6h22M17 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`h-3 w-3 ${className}`}>
      <path d="M1.5 10.5l9-9M3.5 1.5h7v7" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

type TicketProps = Omit<ComponentProps<"a">, "href"> & {
  variant?: "solid" | "outline" | "dark";
  size?: "md" | "lg";
  children?: ReactNode;
};

/** Classes do botão em pílula, partilhadas por todos os CTAs. */
export const pill =
  "group inline-flex min-h-12 items-center justify-center gap-4 rounded-full font-sans text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-[background-color,border-color,color,transform,box-shadow] duration-500 ease-[var(--ease-out-soft)] active:scale-[0.98]";

export const pillVariants = {
  solid:
    "bg-champagne text-ink hover:bg-ivory hover:shadow-[0_10px_40px_-12px_rgb(214_176_106/0.55)]",
  outline: "border border-ivory/25 text-ivory hover:border-champagne hover:bg-champagne hover:text-ink",
  dark: "bg-ink text-ivory hover:bg-graphite",
};

/** Todos os CTAs de inscrição passam por aqui e apontam para TICKET_URL. */
export function TicketLink({ variant = "solid", size = "md", className = "", children, ...rest }: TicketProps) {
  const sizes = { md: "px-7 py-3.5", lg: "px-9 py-[1.15rem] text-[0.8125rem]" };
  return (
    <a
      href={TICKET_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${pill} ${sizes[size]} ${pillVariants[variant]} ${className}`}
      {...rest}
    >
      <Roll>{children ?? "Garantir o meu lugar"}</Roll>
      <ArrowRight className="transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-1.5" />
    </a>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

/** Link de Instagram em pílula: ícone + @perfil. */
export function InstagramLink({
  handle,
  url,
  tone = "dark",
  className = "",
}: {
  handle: string;
  url: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const tones = {
    dark: "border-ivory/20 text-ivory hover:border-champagne hover:bg-champagne hover:text-ink",
    light: "border-ink/20 text-ink hover:border-bronze-deep hover:bg-bronze-deep hover:text-ivory",
  };
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Instagram ${handle} (abre num novo separador)`}
      className={`group inline-flex min-h-11 items-center gap-2.5 rounded-full border py-2 pl-3 pr-4 text-[0.875rem] font-medium transition-colors duration-500 ${tones[tone]} ${className}`}
    >
      <InstagramIcon className="h-[18px] w-[18px] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:rotate-[-8deg] group-hover:scale-110" />
      <Roll>{handle}</Roll>
    </a>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-4 ${className}`}>
      {children}
    </p>
  );
}

export function FlagPT({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={className} role="img" aria-label="Bandeira de Portugal">
      <rect width="12" height="20" fill="#046A38" />
      <rect x="12" width="18" height="20" fill="#DA291C" />
      <circle cx="12" cy="10" r="4.2" fill="none" stroke="#FFE900" strokeWidth="1.1" />
      <path d="M10 7.6h4v3.6a2 2 0 0 1-4 0z" fill="#fff" stroke="#DA291C" strokeWidth="0.7" />
    </svg>
  );
}

export function FlagUS({ className = "" }: { className?: string }) {
  const stripes = Array.from({ length: 13 }, (_, i) => i);
  // Proporções oficiais: cantão 0.76 × 7/13 da altura; 50 estrelas em 9 filas (6/5 alternadas).
  const cantonW = 76;
  const cantonH = (100 / 13) * 7;
  const stars: Array<[number, number]> = [];
  for (let r = 0; r < 9; r++) {
    for (let slot = r % 2 === 0 ? 1 : 2; slot <= 11; slot += 2) {
      stars.push([(slot * cantonW) / 12, ((r + 1) * cantonH) / 10]);
    }
  }
  return (
    <svg viewBox="0 0 190 100" className={className} role="img" aria-label="Bandeira dos Estados Unidos">
      {stripes.map((i) => (
        <rect key={i} y={(i * 100) / 13} width="190" height={100 / 13 + 0.2} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
      ))}
      <rect width={cantonW} height={cantonH} fill="#3C3B6E" />
      {stars.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.9" fill="#FFFFFF" />
      ))}
    </svg>
  );
}
