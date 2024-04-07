"use client";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FacultyCard from "../components/faculty-card";
import CardCarousel from "../components/carousel-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  FacultyCardCarouselParams,
  FacultyCardParams,
} from "@/app/interfaces/Card/facultyCardParams.interface";
import VideoCarousel from "../components/carousel-video";
import {
  VideoCarouselParams,
  VideoParams,
} from "@/app/interfaces/Carousel/videoCarouselParams.interface";
import GridCards from "../components/grid_cards";
import { GridCardParams } from "../interfaces/Card/gridCardParams.interface";

import arrow_right from "@/public/carbon_arrow-right.svg";
import chemical_inst_icon from "@/public/img/chemical_inst_icon.png";

interface CardCarouselParams {
  facultyInfo: FacultyCardParams[];
}

export default function Home() {
  let facultyInfo: FacultyCardParams[] = [
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ИТ",
      facultyDesc: "РАЗРАБОТКА ПО, ИИ, РАБОТОТЕХНИКА, КВАНТОВЫЕ ВЫЧИСЛЕНИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ЭНЕРГЕТИКА",
      facultyDesc: "ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ, ЯДЕРНАЯ ЭНЕРГИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "МЕТАЛЛУРГИЯ",
      facultyDesc: "МЕТАЛЛУРГИЧЕСКИЕ ПРОЦЕССЫ, ПЕРЕРАБОТКА, НОВЫЕ МАТЕРИАЛЫ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ГОРНОЕ ДЕЛО",
      facultyDesc: "ПЕРЕРАБОТКА ГОРНЫХ ПОРОД, ДОБЫЧА ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ИТ",
      facultyDesc: "РАЗРАБОТКА ПО, ИИ, РАБОТОТЕХНИКА, КВАНТОВЫЕ ВЫЧИСЛЕНИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ЭНЕРГЕТИКА",
      facultyDesc: "ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ, ЯДЕРНАЯ ЭНЕРГИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "МЕТАЛЛУРГИЯ",
      facultyDesc: "МЕТАЛЛУРГИЧЕСКИЕ ПРОЦЕССЫ, ПЕРЕРАБОТКА, НОВЫЕ МАТЕРИАЛЫ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ГОРНОЕ ДЕЛО",
      facultyDesc: "ПЕРЕРАБОТКА ГОРНЫХ ПОРОД, ДОБЫЧА ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ИТ",
      facultyDesc: "РАЗРАБОТКА ПО, ИИ, РАБОТОТЕХНИКА, КВАНТОВЫЕ ВЫЧИСЛЕНИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ЭНЕРГЕТИКА",
      facultyDesc: "ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ, ЯДЕРНАЯ ЭНЕРГИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "МЕТАЛЛУРГИЯ",
      facultyDesc: "МЕТАЛЛУРГИЧЕСКИЕ ПРОЦЕССЫ, ПЕРЕРАБОТКА, НОВЫЕ МАТЕРИАЛЫ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ГОРНОЕ ДЕЛО",
      facultyDesc: "ПЕРЕРАБОТКА ГОРНЫХ ПОРОД, ДОБЫЧА ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ИТ",
      facultyDesc: "РАЗРАБОТКА ПО, ИИ, РАБОТОТЕХНИКА, КВАНТОВЫЕ ВЫЧИСЛЕНИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ЭНЕРГЕТИКА",
      facultyDesc: "ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ, ЯДЕРНАЯ ЭНЕРГИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "МЕТАЛЛУРГИЯ",
      facultyDesc: "МЕТАЛЛУРГИЧЕСКИЕ ПРОЦЕССЫ, ПЕРЕРАБОТКА, НОВЫЕ МАТЕРИАЛЫ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ГОРНОЕ ДЕЛО",
      facultyDesc: "ПЕРЕРАБОТКА ГОРНЫХ ПОРОД, ДОБЫЧА ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
    },
  ];

  let videoInfo: VideoParams[] = [
    {
      videoImagePreview: "/img/kbtu-video.png",
      videoTitle: "ЧТО ТАКОЕ НАУКА В КБТУ?",
    },
    {
      videoImagePreview: "/img/card-photo.png",
      videoTitle: "ЧТО ТАКОЕ НАУКА В КБТУ?",
    },
    {
      videoImagePreview: "/img/kbtu-video.png",
      videoTitle: "ЧТО ТАКОЕ НАУКА В КБТУ?",
    },
    {
      videoImagePreview: "/img/kbtu-video.png",
      videoTitle: "ЧТО ТАКОЕ НАУКА В КБТУ?",
    },
  ];

  let cards: GridCardParams[] = [
    {
      image: "/img/video-box/logo-1.png",
      title: "НАНОМАТЕРИАЛЫ И НАНОТЕХНОЛОГИИ",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-2.png",
      title: "НЕФТЕГАЗОВАЯ ИНЖЕНЕРИЯ",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-3.png",
      title: "МАТЕМАТИКА, МАТЕМАТИЧЕСКОЕ И КОМПЬЮТЕРНОЕ МОДЕЛИРОВАНИЕ ",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-4.png",
      title: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ И КИБЕРБЕЗОПАСНОСТЬ",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-5.png",
      title: "АЛЬТЕРНАТИВНАЯ ЭНЕРГЕТИКА",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-6.png",
      title: "БИЗНЕС, МЕНЕДЖМЕНТ И ФИНАНСЫ",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-7.png",
      title: "СОЦИАЛЬНЫЕ И ГУММАНИТАРНЫЕ НАУКИ",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-8.png",
      title: "ГЕОЛОГИЯ И РАЗВЕДКА МЕСТОРОЖ-ДЕНИЙ ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-9.png",
      title: "ЭЛЕКТРОНИКА",
      icon: arrow_right,
    },
    {
      image: "/img/video-box/logo-10.png",
      title: "ХИМ. ТЕХ. (НЕ)ОРГАНИЧЕСКИХ ВЕЩЕСТВ, НЕВТЕХИМИЯ",
      icon: arrow_right,
    },
  ];

  let universityCards: GridCardParams[] = [
    {
      image: "/img/chemical_inst_icon.png",
      title: "АО «Институт химических наук им. А.Б. Бектурова»",
      icon: arrow_right,
    },
    {
      image: "/img/chemical_inst_icon.png",
      title: "АО «Институт химических наук им. А.Б. Бектурова»",
      icon: arrow_right,
    },
    {
      image: "/img/chemical_inst_icon.png",
      title: "АО «Институт химических наук им. А.Б. Бектурова»",
      icon: arrow_right,
    },
    {
      image: "/img/chemical_inst_icon.png",
      title: "АО «Институт химических наук им. А.Б. Бектурова»",
      icon: arrow_right,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Section 1 */}
      <div className="flex w-full h-[34.5rem] justify-around items-center">
        <div className="flex flex-col w-[25rem] ">
          <h1 className="font-normal text-[3.75rem] mb-[2.75rem]">E = MC</h1>
          <div className="bg-[--background-color-blue] flex items-center justify-around mb-[1.75rem] py-5">
            <h2 className="text-2xl text-center text-white">
              УСЛУГИ ЛАБОРАТОРИЙ
            </h2>
            <div className="relative flex justify-center items-center w-[1.75rem] h-[3rem]">
              <Image src="/svg/arrow-right.svg" alt="right arrow" fill />
            </div>
          </div>
          <div className="bg-[--background-color-yellow] flex items-center justify-center">
            <h2 className="text-white text-xl font-medium">
              +7 778 679 67 43 / science@kbtu.kz
            </h2>
          </div>
        </div>
        <div>
          <VideoCarousel videoInfo={videoInfo}></VideoCarousel>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full">
        <div className="flex justify-between items-center gap-5 max-w-72 ml-32 mb-3">
          <h2 className="text-black text-2xl font-normal">О НАУКЕ В КБТУ</h2>
          <div className="relative flex justify-center items-center w-[2.75rem] h-[2.75rem]">
            <Image
              src="/svg/arrow-downward.svg"
              alt="arrow pointing downward"
              fill
            />
          </div>
        </div>

        <div className="flex justify-around items-center bg-[--background-color-blue] w-full h-[11.25rem] px-32 py-5 gap-5">
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
      <div className="mx-[8.125rem] mb-[5rem]">
        <h1 className="text-left text-[3rem] w-[36.25rem] h-48 flex justify-start items-center">
          ВИДЫ ДЕЯТЕЛЬНОСТИ
        </h1>
        <div className="w-full h-auto">
          <GridCards cards={cards} />
        </div>
      </div>

      {/* Section 4 */}
      <>
        <div className="bg-[--background-color-blue] flex flex-wrap mb-[2.5rem] items-center w-full h-[12.5rem] gap-[11.25rem] pl-[7.875rem]">
          <h1 className="text-[2.5rem] font-medium text-[#FFFFFF]">ПРОЕКТЫ</h1>
          <a href="#!">
            <Image
              src="/svg/arrow-right.svg"
              alt="arrow pointing to right"
              width={40}
              height={10}
            />
          </a>
        </div>

        <CardCarousel facultyInfo={facultyInfo} />
      </>

      {/* Section 5 */}
      <div className="flex flex-col w-[90%] mb-[4.375rem]">
        <h1 className="font-medium text-[3rem]">ИНСТИТУТЫ</h1>
        <GridCards cards={universityCards} />
      </div>

      {/* Section 6 */}
      <div className="flex flex-col items-start w-[90%] gap-5 mb-20">
        <h1 className="font-medium text-[3rem]">FAQ</h1>
        {[1, 2, 3, 4, 5].map((elem, ind) => (
          <div key={ind} className="w-full border border-[#DBDBDB]">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="p-7">
                <AccordionTrigger className="font-normal text-2xl">
                  Можно ли вместе в вами в партнерстве разработать проект?
                </AccordionTrigger>
                <AccordionContent className="font-normal text-2xl">
                  Да.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
