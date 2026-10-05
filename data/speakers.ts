/**
 * Oradores, organizadora e mestre de cerimónias.
 * Grafia, papéis e temas conforme os materiais oficiais do evento.
 * `topic` e `bio` ficam `null` quando não foram confirmados: nunca preencher com texto inventado.
 * `image` é o nome base do ficheiro em public/images (ver lib/image-manifest.json).
 */

export type Speaker = {
  id: string;
  name: string;
  role: string;
  topic: string | null;
  image: string;
  bio: string | null;
  /** Posição do recorte dentro do cartão (object-position). */
  focus?: string;
};

export const organizer: Speaker = {
  id: "raquel-guidalli",
  name: "Raquel Guidalli",
  role: "Organizadora",
  topic: "Do Limite à Transformação",
  image: "raquel-guidalli",
  bio: null,
};

export const speakers: Speaker[] = [
  {
    id: "belinha-cardoso",
    name: "Belinha Cardoso",
    role: "Oradora",
    topic: "Atendimento Humanizado: A Experiência que Diferencia e Fideliza",
    image: "belinha-cardoso",
    bio: null,
  },
  {
    id: "maria-celeste-barreto",
    name: "Dra. Maria Celeste Barreto",
    role: "Oradora",
    topic: "Direitos, deveres e segurança jurídica na prática da estética",
    image: "maria-celeste-barreto",
    bio: null,
  },
  {
    id: "teylon-castro",
    name: "Dr. Teylon Castro",
    role: "Orador",
    topic: "Harmonização Cirúrgica · Técnica: Lipoescultura Facial 5TC",
    image: "teylon-castro",
    bio: null,
  },
  {
    id: "helena-venceslau",
    name: "Helena Venceslau",
    role: "Oradora",
    topic: "Pontos Cegos da Biossegurança na Epilação",
    image: "helena-venceslau",
    bio: null,
  },
  {
    id: "john-feitosa",
    name: "Dr. John Feitosa",
    role: "Orador",
    // Assim no cronograma oficial: o tema só é revelado no dia.
    topic: "Surpresa",
    image: "john-feitosa",
    bio: null,
  },
  {
    id: "gustavo-galves",
    name: "Gustavo Galves",
    role: "Orador",
    topic: "Os avanços tecnológicos do Microagulhamento Estético em tratamentos faciais, corporais, capilares e íntimos",
    image: "gustavo-galves",
    bio: null,
  },
  {
    id: "patricia-benitto",
    name: "Patricia Benitto",
    role: "Oradora",
    // Título em espanhol, como no cartaz; corrigidos só os erros de digitação ("De lá", "Reconsctruccion").
    topic: "De la Despigmentación Láser a la Reconstrucción de Areola 3D",
    image: "patricia-benitto",
    bio: null,
  },
];

export const ceremonialist: Speaker = {
  id: "danny-gomes",
  name: "Danny Gomes",
  role: "Mestre de cerimónias",
  topic: null,
  image: "danny-gomes",
  bio: null,
};

/**
 * Número de oradores. A organizadora também dá uma conferência, mas tem secção própria
 * (FeaturedOrganizer) e não se repete na grelha: por isso soma-se aqui.
 */
export const SPEAKER_COUNT = speakers.length + 1;
