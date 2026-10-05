"use client";

import { useEffect, useRef, useState } from "react";
import { EVENT_DATE, EVENT_LOCATION, EVENT_TIME, TICKET_URL } from "@/config/event";
import { TicketLink } from "./ui";
import { Roll } from "./motion";

const links = [
  { href: "#summit", label: "O Summit" },
  { href: "#oradores", label: "Oradores" },
  { href: "#programa", label: "Programa" },
  { href: "#temas", label: "Temas" },
  { href: "#local", label: "Local" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panel) {
        const items = [toggleRef.current, ...panel.querySelectorAll<HTMLElement>("a")].filter(Boolean) as HTMLElement[];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid ? "border-b border-ivory/[0.07] bg-ink/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Principal" className="shell flex h-18 items-center justify-between gap-6 md:h-20">
        <a href="#top" className="group flex flex-col leading-none" aria-label="European Advanced Aesthetics Summit 2026, início">
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.42em] text-champagne">European · 2026</span>
          <span className="mt-1.5 text-[0.9375rem] font-medium tracking-[0.02em] text-ivory">Advanced Aesthetics Summit</span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative block py-2 text-[0.8125rem] font-medium tracking-[0.06em] text-ivory/75 transition-colors duration-300 hover:text-champagne"
                >
                  <Roll>{l.label}</Roll>
                </a>
              </li>
            ))}
          </ul>
          <TicketLink variant="outline" className="min-h-11 px-6 py-2.5 text-[0.72rem]">
            Garantir lugar
          </TicketLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="relative -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-px w-6 bg-ivory transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[4px]"}`}
          />
          <span
            className={`absolute h-px w-6 bg-ivory transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[4px]"}`}
          />
        </button>
      </nav>

      <div
        id="menu-mobile"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-18 bg-ink md:top-20 lg:hidden"
      >
        <div className="shell flex h-full flex-col justify-between pb-10 pt-10">
          <ul className="space-y-1">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-ivory/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-display text-[1.875rem] font-light leading-none text-ivory"
                >
                  {l.label}
                  <span className="font-sans text-xs tracking-[0.2em] text-muted">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="space-y-4">
            <p className="text-sm text-muted">{EVENT_DATE.day} {EVENT_DATE.month} {EVENT_DATE.year} · {EVENT_TIME.label} · {EVENT_LOCATION.city}</p>
            <a
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-14 w-full items-center justify-center rounded-full bg-champagne text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-ink"
            >
              Garantir o meu lugar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
