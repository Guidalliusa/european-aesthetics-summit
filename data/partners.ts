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
};

export const partners: Partner[] = [
  { name: "BeLux Clinic", logo: "/logos/belux-clinic.png", logoWidth: 367, logoHeight: 314 },
  { name: "LifeWave", logo: "/logos/lifewave.png", logoWidth: 468, logoHeight: 161 },
  { name: "Guidalli International Academy", logo: "/logos/guidalli-international-academy.png", logoWidth: 538, logoHeight: 310 },
  // Só existia um recorte pequeno e truncado do cartaz: usa-se o monograma "Be" e o nome em texto.
  // Com o ficheiro oficial, trocar o logo e remover a legenda.
  {
    name: "The BE System Global",
    logo: "/logos/be-system-global.png",
    logoWidth: 329,
    logoHeight: 225,
    caption: "The BE System · Global",
  },
  // Original com fundo claro e texto preto: passado a marfim (como a LifeWave) para ler sobre o preto.
  { name: "Grupo Cado", logo: "/logos/grupo-cado.png", logoWidth: 700, logoHeight: 414 },
];
