/**
 * Parceiros presentes nos materiais oficiais.
 *
 * Para ativar um logótipo: colocar o ficheiro em public/logos/ (SVG ou PNG transparente,
 * de preferência versão clara/monocromática para fundo escuro) e preencher `logo`,
 * `logoWidth` e `logoHeight` com as dimensões do ficheiro.
 * Enquanto `logo` for null, o parceiro aparece apenas com o nome em texto.
 */

export type Partner = {
  name: string;
  logo: string | null;
  logoWidth?: number;
  logoHeight?: number;
  url?: string;
  /** Nome por baixo do símbolo, quando o ficheiro só traz o monograma. */
  caption?: string;
  /** Logótipo vertical (símbolo + texto empilhado): precisa de mais altura para pesar o mesmo. */
  tall?: boolean;
};

export const partners: Partner[] = [
  { name: "BeLux Clinic", logo: "/logos/belux-clinic.png", logoWidth: 367, logoHeight: 314 },
  { name: "LifeWave", logo: "/logos/lifewave.png", logoWidth: 468, logoHeight: 161 },
  { name: "Guidalli International Academy", logo: "/logos/guidalli-international-academy.png", logoWidth: 538, logoHeight: 310 },
  // Ficheiro oficial: fundo preto removido; o cinzento-chumbo foi aclarado para ler sobre o preto.
  { name: "The BE System Global", logo: "/logos/be-system-global.png", logoWidth: 700, logoHeight: 472 },
  { name: "Belinha Cardoso", logo: "/logos/belinha-cardoso.png", logoWidth: 494, logoHeight: 700, tall: true },
  // Original em PDF (cinzento-claro + texto preto): forma mantida, tudo a marfim.
  { name: "MF Profissional", logo: "/logos/mf-profissional.png", logoWidth: 597, logoHeight: 700, tall: true },
  // Romã nas cores originais; só o texto (preto no original) passa a marfim para ler sobre o fundo escuro.
  { name: "Grupo Cado", logo: "/logos/grupo-cado.png", logoWidth: 700, logoHeight: 414 },
  // Selo dourado recortado do quadrado turquesa (fundo transparente); cores originais.
  { name: "JD Lashes", logo: "/logos/jd-lashes.png", logoWidth: 368, logoHeight: 368, tall: true },
  // Original preto sobre branco: texto passa a marfim, fundo transparente.
  { name: "Tyrrel Professional", logo: "/logos/tyrrel-professional.png", logoWidth: 700, logoHeight: 206 },
];
