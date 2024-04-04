import {useTranslations} from 'next-intl';
 
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FacultyCardParams } from '../components/faculty-card';

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


  const t = useTranslations("Navbar");

  return (
    <div className="flex justify-center">
      <h1>{t("projects")}</h1>
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
