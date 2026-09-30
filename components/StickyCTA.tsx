"use client";

import { useEffect, useState } from "react";
import { TICKET_PRICE, TICKET_URL } from "@/config/event";

/** Barra de inscrição no mobile: aparece depois do hero e sai de cena no bloco do ingresso. */
export default function StickyCTA() {
  const [pastHero, setPastHero] = useState(false);
  const [nearEnd, setNearEnd] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const end = document.getElementById("ingresso");
    if (!hero || !end) return;
    const heroObs = new IntersectionObserver(([e]) => setPastHero(!e.isIntersecting), { threshold: 0.05 });
    const endObs = new IntersectionObserver(([e]) => setNearEnd(e.isIntersecting || e.boundingClientRect.top < 0), {
      threshold: 0,
    });
    heroObs.observe(hero);
    endObs.observe(end);
    return () => {
      heroObs.disconnect();
      endObs.disconnect();
    };
  }, []);

  const visible = pastHero && !nearEnd;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 rounded-full border border-ivory/12 bg-ink/85 shadow-[0_18px_50px_-18px_rgb(0_0_0/0.9)] backdrop-blur-md transition-[translate,opacity] duration-700 ease-[var(--ease-out-soft)] md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[140%] opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-4 py-1.5 pl-6 pr-1.5">
        <p className="leading-tight">
          <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted">Bilhete</span>
          <span className="text-[1.25rem] font-light text-ivory">{TICKET_PRICE.label}</span>
        </p>
        <a
          href={TICKET_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="flex min-h-12 items-center rounded-full bg-champagne px-6 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink"
        >
          Garantir lugar
        </a>
      </div>
    </div>
  );
}
