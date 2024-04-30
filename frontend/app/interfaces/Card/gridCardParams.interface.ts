export interface GridCardParams {
  image: string;
  title: string;
  icon: string;
}

export interface GridCardsParams {
  cards: GridCardParams[];
  widthImage?: number | string; // because it can be written in px [20px] or line ["2rem"]
  widthMinText?: number | string;
  widthMaxText?: number | string;
  widthIcon?: number | string;
  padding?: number | string;
  gapImgText?: string | string;
  gapTextIcon?: string | string;
}
