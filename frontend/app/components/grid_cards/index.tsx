import Image from "next/image";
import style from "./style.module.css";
import arrow_right from "@/public/carbon_arrow-right.svg";
import chemical_inst_icon from "@/public/img/chemical_inst_icon.png";

import {
  GridCardParams,
  GridCardsParams,
} from "@/app/interfaces/Card/gridCardParams.interface";

const GridCards: React.FC<GridCardsParams> = ({ cards, ...props }) => {
  let { widthImage, 
    widthMinText, 
    widthMaxText, 
    widthIcon, 
    padding, 
    gapImgText, 
    gapTextIcon 
  } = props;

  if (!widthImage) widthImage = 90;
  if (!widthMinText) widthMinText = 12.5;
  if (!widthMaxText) widthMaxText = 23.125;
  if (!widthIcon) widthIcon = 40;
  if (!padding) padding = 4;
  if (!gapImgText) gapImgText = "2rem"
  if (!gapTextIcon) gapTextIcon = "0.75rem"
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-row items-center justify-between space-x-3 border-2 border-[rgba(0,0,0,0.1)] border-solid`}
          style={{gap:gapTextIcon,padding:padding}}
        >
          <div className={`flex justify-center items-center`} style={{gap: gapImgText}}>
            <Image
              src={card.image}
              alt="institution"
              width={widthImage}
              //   card.image.includes("logo-3") || card.image.includes("logo-8") // logo-3 and logo-8's widths are enlarged, because their image width are smaller than other by default
              //     ? widthImage + 30
              //     : widthImage
              // } // directly use the prop here
              height={widthImage} // you might want to have a separate prop for height if it needs to be different
              // style={{ marginLeft: card.image.includes("logo-4") ? "7px" : "" }} // for image 4, there need to be left margin, because it's more left-leaning than other images
            />
            <p className={`max-w-[${widthMaxText}] min-w-[${widthMinText}] text-[0.875rem] lg:text-[1.25rem]`}>
              {card.title}
            </p>
          </div>
          <Image
            src={card.icon}
            alt="icon next"
            width={widthIcon}
            height={widthIcon}
          />
        </div>
      ))}
    </div>
  );
};

export default GridCards;
