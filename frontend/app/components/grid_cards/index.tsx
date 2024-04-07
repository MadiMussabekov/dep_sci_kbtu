import Image from "next/image";
import style from "./style.module.css";
import arrow_right from "@/public/carbon_arrow-right.svg";
import chemical_inst_icon from "@/public/img/chemical_inst_icon.png";

import {
  GridCardParams,
  GridCardsParams,
} from "@/app/interfaces/Card/gridCardParams.interface";

const GridCards: React.FC<GridCardsParams> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-row items-center justify-between space-x-3 gap-3 p-4 border-2 border-[rgba(0,0,0,0.1)] border-solid"
        >
          <div className="flex justify-center items-center ">
            <Image
              src={card.image}
              alt="institution"
              width={100} height={82}
              className="w-[100[px] h-[82px]"
            />
            <p className="max-w-[23.125rem] min-w-[12.5rem]">{card.title}</p>{" "}
          </div>
          <Image src={card.icon} alt="icon next" width={40} height={40} />
        </div>
      ))}
    </div>
  );
};

export default GridCards;
