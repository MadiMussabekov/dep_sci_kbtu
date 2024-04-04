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

import { FacultyCardParams } from "@/app/interfaces/Card/facultyCardParams.interface";
import VideoCarousel from "../components/carousel-video";
import {
  VideoCarouselParams,
  VideoParams,
} from "@/app/interfaces/Carousel/videoCarouselParams.interface";

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

  return (
    <>
      <VideoCarousel videoInfo={videoInfo}></VideoCarousel>
    </>
  );
}
