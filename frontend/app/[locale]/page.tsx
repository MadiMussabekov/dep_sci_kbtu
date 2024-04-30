"use client";
import Image from "next/image";
import CardCarousel from "../components/carousel-cards";

import { FacultyCardParams } from "@/app/interfaces/Card/facultyCardParams.interface";
import VideoCarousel from "../components/carousel-video";

import GridCards from "../components/grid_cards";

import {
  facultyInfo,
  videoInfo,
  cards,
  universityCards,
} from "@/database/homepage";
import CustomAccordion from "../components/accordion";
import { useEffect, useState } from "react";

interface CardCarouselParams {
  facultyInfo: FacultyCardParams[];
}

export default function Home() {
  const [resGridProps, setResGridProps] = useState({
    widthImage: 50,
    widthIcon: 20,
    padding: "1rem",
    widthMaxText: "70%",
    gapImgText: "2rem",
    gapTextIcon: "0.75rem",
  });

  const [mobileVer, setMobileVer] = useState<boolean>(false);

  {
    /* widthImage num, 
      widthIcon num, 
      padding rem,percentages,etc, 
      widthMinText rem,percentages,etc, 
      widthMaxText rem,percentages,etc, 
      gapImgText rem,percentages,etc, 
      gapTextIcon rem,percentages,etc*/
  }

  // Number of cards in slider
  const [cardsNum, setCardsNum] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setResGridProps({
          widthImage: 47,
          widthIcon: 20,
          padding: "1rem",
          widthMaxText: "70%",
          gapImgText: "0.75rem",
          gapTextIcon: "0.75rem",
        });

        setCardsNum(1);
        setMobileVer(true);
      } else if (window.innerWidth < 1100) {
        setCardsNum(2);
        setMobileVer(false);
      } else if (window.innerWidth < 1450) {
        setCardsNum(3);
        setMobileVer(false);
      } else {
        setMobileVer(false);
        setResGridProps({
          widthImage: 50,
          widthIcon: 20,
          padding: "1rem",
          widthMaxText: "70%",
          gapImgText: "2rem",
          gapTextIcon: "0.75rem",
        });

        setCardsNum(4);
      }
    }

    // Set the initial values
    handleResize();

    // When window resizes, listener triggers
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Section 1 */}
      <div className="flex justify-center items-center w-75% max-h-[50rem] mb-[11rem] md:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-11 items-center h-[34.5rem] w-full">
          {/* Left Side, can adjust paddings here*/}
          <div className="p-7 md:p-0">
            <h1 className="font-normal leading-none mb-10 md:mb-16">
              <span className="text-4xl md:text-[3.75rem]">E = MC</span>
              <span className="align-[1rem] md:align-super text-[2.5rem]">
                ²
              </span>
            </h1>

            <div className="w-full h-14 col-span-3 md:w-[25rem] md:h-24 bg-[--background-color-blue] mb-7 flex items-center justify-around py-[2.5rem] text-white">
              <h2 className="text-2xl text-center">УСЛУГИ ЛАБОРАТОРИЙ</h2>
              <Image
                src="/carbon_arrow-right-white.svg"
                alt="right arrow"
                width={35}
                height={35}
              />
            </div>

            <div className="bg-[--background-color-yellow] font-medium text-[1.25rem] flex items-center justify-center text-white text-xl w-full md:w-[25rem] py-2 px-1">
              +7 778 679 67 43 / science@kbtu.kz
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-2 md:col-span-1 h-[23.75rem]">
            <VideoCarousel videoInfo={videoInfo} />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full">
        <div className="flex justify-around items-center gap-5 max-w-72 md:ml-32 mb-3">
          <h2 className="text-black text-2xl font-normal">О НАУКЕ В КБТУ</h2>
          <div className="relative flex justify-center items-center w-[2.75rem] h-[2.75rem]">
            <Image
              src="/svg/arrow-downward.svg"
              alt="arrow pointing downward"
              fill
            />
          </div>
        </div>

        <div className="overflow-y-scroll flex justify-around items-center bg-[--background-color-blue] w-full h-auto px-16 py-5 gap-5">
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            ОТКРЫТИЕ В СЕБЕ УЧЕНОГО!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            PhD ЗАЩИТА
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            УЛУЧШЕНИЕ КАЧЕСТВА ЖИЗНИ!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            РЕШЕНИЕ ГЛОБАЛЬНЫХ ПРОБЛЕМ!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            ШАГ ВПЕРЕД!
          </button>
          <button className="border rounded-[5px] border-white p-5 text-white w-[11.25rem] h-[8.75rem] text-xl font-normal">
            ЭТО НЕЧТО НОВОЕ!
          </button>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full mb-[5rem] mt-[4rem]">
        <div className="grid grid-cols-1 gap-5 max-w-[82%] mx-auto">
          <h1 className="text-[3rem] col-span-full mb-10 ">
            ВИДЫ ДЕЯТЕЛЬНОСТИ
          </h1>
          <div className="col-span-full">
            <GridCards {...resGridProps} cards={cards} />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <>
        <div className="bg-[--background-color-blue] flex flex-wrap mb-[2.5rem] items-center w-full h-[12.5rem] gap-[7.5rem] lg:gap-[22.1rem] pl-[8rem]">
          <h1 className="text-[1.5rem]  lg:text-[2.5rem] font-medium text-[#FFFFFF]">
            ПРОЕКТЫ
          </h1>
          <a href="#!">
            <Image
              src="/carbon_arrow-right-white.svg"
              alt="arrow pointing to right"
              width={40}
              height={10}
            />
          </a>
        </div>

        <CardCarousel facultyInfo={facultyInfo} cardsNum={cardsNum} />
      </>

      {/* Section 5 */}
      <div className="grid grid-cols-1 gap-7 mb-[4.375rem] mt-20 w-[83%]">
        <h1 className="font-medium text-[3rem]">ИНСТИТУТЫ</h1>
        <GridCards
          cards={universityCards}
          widthImage={mobileVer ? 70 : 140}
          widthIcon={mobileVer ? 22 : 40}
          padding={7}
        />
      </div>

      {/* Section 6 */}
      <div className="grid grid-cols-1 gap-5 mb-20 w-[83%]">
        <h1 className="font-medium text-[3rem] col-span-full">FAQ</h1>
        {[1, 2, 3, 4, 5].map((elem, ind) => (
          <div key={ind} className="w-full border border-[#DBDBDB]">
            {/* Replace the commented out Accordion with your CustomAccordion */}
            <CustomAccordion
              title="Можно ли вместе в вами в партнерстве разработать проект?"
              content="Да."
            />
          </div>
        ))}
      </div>
    </div>
  );
}
