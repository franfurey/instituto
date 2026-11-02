export type Noticia = {
  titulo: string;
  data: string;
  resumo: string;
  imagem?: string;
  link?: string;
};

// TODO: inserir notícias reais.
export const noticias: Noticia[] = [];
