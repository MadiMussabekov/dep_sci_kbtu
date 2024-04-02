import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FacultyCard from "./components/faculty-card";

export default function Home() {
  let facultyInfo = [
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
    <div>
      <p>Hello</p>
      {/* <Navbar></Navbar>
      <Footer></Footer> */}
      <div className="flex items-center">
        {facultyInfo.map((faculty, index) => (
          <FacultyCard key={index} {...faculty}></FacultyCard>
        ))}
      </div>
    </div>
  );
}
