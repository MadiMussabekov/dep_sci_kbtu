import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FacultyCard, { FacultyCardParams } from "./components/faculty-card";
import CardCarousel from "./components/carousel-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CardCarouselProps {
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
  ];
  return (
    <div className="flex justify-center">
      {/* <Navbar></Navbar>
      <Footer></Footer> */}
      {/* <CardCarousel facultyInfo={facultyInfo} /> */}
      {/* <Accordion
        type="single"
        collapsible
        className="max-w-[1180px] w-full m-6"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Можно ли вместе в вами в партнерстве разработать проект?
          </AccordionTrigger>
          <AccordionContent>Да</AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}
