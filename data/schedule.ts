import { organizer, speakers, type Speaker } from "./speakers";

/**
 * Programa do dia, conforme o cronograma oficial enviado pela organização.
 * Conferências apontam para o orador (nome e tema vêm de data/speakers.ts, sem duplicar texto).
 */

export type Slot = {
  start: string;
  end: string;
  /** Conferência de um orador. */
  speaker?: Speaker;
  /** Momentos do programa sem orador da grelha (boas-vindas, pausa, painel, encerramento). */
  title?: string;
  /** Nome ou detalhe por baixo do título. */
  detail?: string;
  kind: "talk" | "moment" | "break";
};

const by = (id: string) => {
  const s = [organizer, ...speakers].find((x) => x.id === id);
  if (!s) throw new Error(`Orador desconhecido no programa: ${id}`);
  return s;
};

export const schedule: Slot[] = [
  { start: "13:30", end: "13:45", title: "Boas-vindas", detail: "Raquel Guidalli", kind: "moment" },
  { start: "13:45", end: "14:05", title: "Sponsor MF", detail: "Manuela Ferreira", kind: "moment" },
  { start: "14:10", end: "14:40", speaker: by("belinha-cardoso"), kind: "talk" },
  { start: "14:45", end: "15:15", speaker: by("gustavo-galves"), kind: "talk" },
  { start: "15:20", end: "15:50", speaker: by("helena-venceslau"), kind: "talk" },
  { start: "15:55", end: "16:25", speaker: by("maria-celeste-barreto"), kind: "talk" },
  { start: "16:30", end: "17:00", title: "Coffee break e networking", kind: "break" },
  { start: "17:00", end: "17:30", title: "Painel profissional", kind: "moment" },
  { start: "17:30", end: "18:00", speaker: by("mayara-marinov"), kind: "talk" },
  { start: "18:05", end: "18:35", speaker: by("patricia-benitto"), kind: "talk" },
  { start: "18:35", end: "19:05", speaker: by("teylon-castro"), kind: "talk" },
  { start: "19:05", end: "19:30", speaker: organizer, kind: "talk" },
  { start: "19:30", end: "20:00", title: "Encerramento, sorteios e certificação", kind: "moment" },
];
