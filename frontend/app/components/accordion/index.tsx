import { useState, useRef } from "react";
import styles from "./style.module.css";
// import arrow_up from '@/public/raphael_arrowup.svg';
import arrow_up from "@/public/iconamoon_arrow-up-2-thin.svg";

import Image from "next/image";

const CustomAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.accordion_item}`}>
      <button className={`${styles.accordion_trigger}`} onClick={handleClick}>
        <p>{title}</p>
        <div>
          <Image
            className={
              isActive ? styles.arrow_up_active : styles.arrow_up_inactive
            }
            src={arrow_up}
            alt="arrow up"
            width={50}
            height={50}
          />
        </div>
      </button>
      <div
        className={`${styles.accordion_content}`}
        ref={contentRef}
        style={{
          maxHeight: isActive ? `${contentRef.current.scrollHeight}px` : "0",
          transition: "max-height 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CustomAccordion;
