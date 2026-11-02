export type Boletim = {
  edicao: number;
  titulo: string;
  /** Data de publicação já formatada para exibição, ex.: "março de 2026" */
  data: string;
  resumo: string;
  tema: string;
  /** URL ou import da imagem de capa */
  capa: string;
  linkLeitura: string;
  linkPdf: string;
};

// TODO: inserir os boletins reais. O mais recente deve vir primeiro (maior edição).
export const boletins: Boletim[] = [];
