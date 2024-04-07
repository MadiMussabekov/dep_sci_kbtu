import { StaticImageData } from "next/image";

export interface GridCardParams {
  image: string;
  title: string;
  icon: string;
}

export interface GridCardsParams {
  cards: GridCardParams[];
}
