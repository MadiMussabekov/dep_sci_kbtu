import Image from "next/image";
import style from "./style.module.css";
import arrow_right from "@/public/carbon_arrow-right.svg";
import chemical_inst_icon from "@/public/img/chemical_inst_icon.png";

import {
  GridCardParams,
  GridCardsParams,
} from "@/app/interfaces/Card/gridCardParams.interface";

const GridCards: React.FC<GridCardsParams> = ({ cards, ...props }) => {
  let {
    widthImage,
    widthMinText,
    widthMaxText,
    widthIcon,
    padding,
  } = props;

  if(!widthImage) widthImage = 100
  if(!widthMinText) widthMinText = 12.5
  if(!widthMaxText) widthMaxText = 23.125
  if(!widthIcon) widthIcon = 40
  if(!padding) padding = 4

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-row items-center justify-between space-x-3 gap-3 p-${padding} border-2 border-[rgba(0,0,0,0.1)] border-solid`}
        >
          <div className="flex justify-center items-center gap-[2rem]">
            <Image
              src={card.image}
              alt="institution"
              width={widthImage} // directly use the prop here
              height={widthImage} // you might want to have a separate prop for height if it needs to be different
            />
            <p className={`max-w-[${widthMaxText}] min-w-[${widthMinText}]`}>{card.title}</p>
          </div>
          <Image src={card.icon} alt="icon next" width={widthIcon} height={widthIcon} />
        </div>
      ))}
    </div>
  );
};

export default GridCards;
