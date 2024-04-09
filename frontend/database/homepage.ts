import { GridCardParams } from './../app/interfaces/Card/gridCardParams.interface';
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

import {
  VideoCarouselParams,
  VideoParams,
} from "@/app/interfaces/Carousel/videoCarouselParams.interface";

import arrow_right from "@/public/carbon_arrow-right.svg";
import chemical_inst_icon from "@/public/img/chemical_inst_icon.png";


export let facultyInfo: FacultyCardParams[] = [
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
      facultyName: "ИТ2",
      facultyDesc: "РАЗРАБОТКА ПО, ИИ, РАБОТОТЕХНИКА, КВАНТОВЫЕ ВЫЧИСЛЕНИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ЭНЕРГЕТИКА2",
      facultyDesc: "ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ, ЯДЕРНАЯ ЭНЕРГИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "МЕТАЛЛУРГИЯ2",
      facultyDesc: "МЕТАЛЛУРГИЧЕСКИЕ ПРОЦЕССЫ, ПЕРЕРАБОТКА, НОВЫЕ МАТЕРИАЛЫ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ГОРНОЕ ДЕЛО2",
      facultyDesc: "ПЕРЕРАБОТКА ГОРНЫХ ПОРОД, ДОБЫЧА ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ИТ3",
      facultyDesc: "РАЗРАБОТКА ПО, ИИ, РАБОТОТЕХНИКА, КВАНТОВЫЕ ВЫЧИСЛЕНИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ЭНЕРГЕТИКА3",
      facultyDesc: "ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ, ЯДЕРНАЯ ЭНЕРГИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "МЕТАЛЛУРГИЯ3",
      facultyDesc: "МЕТАЛЛУРГИЧЕСКИЕ ПРОЦЕССЫ, ПЕРЕРАБОТКА, НОВЫЕ МАТЕРИАЛЫ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ГОРНОЕ ДЕЛО3",
      facultyDesc: "ПЕРЕРАБОТКА ГОРНЫХ ПОРОД, ДОБЫЧА ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ИТ4",
      facultyDesc: "РАЗРАБОТКА ПО, ИИ, РАБОТОТЕХНИКА, КВАНТОВЫЕ ВЫЧИСЛЕНИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ЭНЕРГЕТИКА4",
      facultyDesc: "ВОЗОБНОВЛЯЕМЫЕ ИСТОЧНИКИ ЭНЕРГИИ, ЯДЕРНАЯ ЭНЕРГИЯ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "МЕТАЛЛУРГИЯ4",
      facultyDesc: "МЕТАЛЛУРГИЧЕСКИЕ ПРОЦЕССЫ, ПЕРЕРАБОТКА, НОВЫЕ МАТЕРИАЛЫ",
    },
    {
      imageUrl: "/img/card-photo.png",
      facultyName: "ГОРНОЕ ДЕЛО4",
      facultyDesc: "ПЕРЕРАБОТКА ГОРНЫХ ПОРОД, ДОБЫЧА ПОЛЕЗНЫХ ИСКОПАЕМЫХ",
    },
  ];

  export let videoInfo: VideoParams[] = [
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

  export let cards: GridCardParams[] = [
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

  export let universityCards: GridCardParams[] = [
    {
      image: "/img/chemical_inst_icon.png",
      title: "АО «Институт химических наук им. А.Б. Бектурова»",
      icon: arrow_right,
    },
    {
      image: "/img/itke.png",
      title: "АО «Институт топлива, катализа и электрохимии им. Д.В. Сокольского»",
      icon: arrow_right,
    },
    {
      image: "/img/ieit.png",
      title: "АО «ТОО «Институт инжиниринга и информационных технологий»",
      icon: arrow_right,
    },
    {
      image: "/img/chemical_inst_icon.png",
      title: "Нефтяной инженерный институт «Один пояс, один путь»",
      icon: arrow_right,
    },
  ];