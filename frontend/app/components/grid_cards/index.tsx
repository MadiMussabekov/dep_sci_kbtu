import Image from 'next/image';
import style from './style.module.css';
import arrow_right from '@/public/carbon_arrow-right.svg'
import chemical_inst_icon from '@/public/img/chemical_inst_icon.png';

export default function GridCards() {
    const cards = [
        {
            image: chemical_inst_icon,
            title: "АО «Институт химических наук им. А.Б. Бектурова»",
            icon: arrow_right
        },
        {
            image: chemical_inst_icon,
            title: "АО «Институт химических наук им. А.Б. Бектурова»",
            icon: arrow_right
        },
        {
            image: chemical_inst_icon,
            title: "АО «Институт химических наук им. А.Б. Бектурова»",
            icon: arrow_right
        },
        {
            image: chemical_inst_icon,
            title: "АО «Институт химических наук им. А.Б. Бектурова»",
            icon: arrow_right
        },
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
            {cards.map((card, index) => (
                <div key={index} className="flex flex-row items-center space-x-3 gap-3 p-4 border-2 border-[rgba(0,0,0,0.1)] border-solid">
                    <Image src={card.image} alt='institution' width={140} height={140}/>
                    <p>{card.title}</p>
                    <Image src={card.icon} alt='icon next' width={40} height={40}  />
                </div>
            ))}
        </div>
    )
}