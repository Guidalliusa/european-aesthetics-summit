/**
 * Configuração central do evento.
 * Todos os links e dados editáveis da landing estão aqui.
 */

/** Destino de todos os botões "Garantir o meu lugar" (grupo oficial no WhatsApp). */
export const TICKET_URL = "https://chat.whatsapp.com/LSylVAd3Xt0HNH6rs4GyMe?mode=gi_t";

/** Botão "Ver localização" (abre num novo separador). */
export const LOCATION_URL =
  "https://www.google.com/maps/search/?api=1&query=IPDJ%20Lisboa%20-%20Dire%C3%A7%C3%A3o%20Regional%20de%20Lisboa%20e%20Vale%20do%20Tejo";

/** Perfis de Instagram do evento (aparecem na secção da Raquel, na certificação e no rodapé). */
export const INSTAGRAM = {
  raquel: { handle: "@raquelguidall", url: "https://www.instagram.com/raquelguidall/" },
  congressos: { handle: "@congressos_usa", url: "https://www.instagram.com/congressos_usa/" },
};

/** Crédito do rodapé. */
export const GRUPO_CADO_URL = "https://www.instagram.com/ogrupocado/";

/**
 * Endereço público do site (SEO, Open Graph, canonical), sempre com "/" no fim.
 * Hoje: GitHub Pages em siqueirawhelisson-design/european-aesthetics-summit.
 * Com domínio próprio, trocar aqui e deixar NEXT_PUBLIC_BASE_PATH vazio no build.
 */
export const SITE_URL = "https://siqueirawhelisson-design.github.io/european-aesthetics-summit/";

/** URL absoluto de um ficheiro do site (ex.: siteUrl("og.jpg")). */
export const siteUrl = (path = "") => new URL(path, SITE_URL).href;

export const EVENT_NAME = "European Advanced Aesthetics Summit 2026";
export const EVENT_TAGLINE = "Onde a estética do futuro ganha vida.";

export const EVENT_DATE = {
  iso: "2026-11-15",
  day: "15",
  month: "Novembro",
  year: "2026",
  long: "15 de novembro de 2026",
  short: "15 Nov · 2026",
};

export const EVENT_TIME = {
  start: "14:00",
  end: "20:00",
  label: "14:00 às 20:00",
  /** Lisboa em novembro está em WET (UTC+0). */
  startISO: "2026-11-15T14:00:00+00:00",
  endISO: "2026-11-15T20:00:00+00:00",
};

export const EVENT_LOCATION = {
  city: "Lisboa",
  country: "Portugal",
  venue: "IPDJ Lisboa",
  venueDetail: "Direção Regional de Lisboa e Vale do Tejo",
};

export const EVENT_ADDRESS = {
  street: "Rua de Moscavide 4.71",
  postalCode: "1998-011",
  locality: "Lisboa",
  country: "Portugal",
  countryCode: "PT",
};

export const TICKET_PRICE = {
  value: 99.7,
  currency: "EUR",
  label: "€99,70",
};
