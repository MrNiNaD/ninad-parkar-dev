import React from "react";
import style from "@/app/page.module.css";
import Ninad from "@/assets/image/ninad.jpg";
import Image from "next/image";

const Title = () => {
  return (
    <section className={style.myTitle}>
      <div className={style.myDetails}>
        <h2 className={style.heading2}>Hello, I'm Ninad,</h2>
        <div className={style.designationContainer}>
          <span className={`${style.heading2} ${style.designation}`}>
            Software
          </span>
          <span className={`${style.heading2} ${style.designation}`}>
            Engineer
          </span>
        </div>
        <span className={style.heading2}>Based in Mumbai, Maharashtra</span>
        <div className={style.btnContainer}>
          <span className={style.btn}>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1V9eAugeYIXV_97PfbzQHMOJB0jLRGzBl/view?usp=sharing"
            >
              Resume
            </a>
            <span className={style.btnOverlay} />
          </span>
        </div>
      </div>
      <div className={style.imageSection}>
        <Image src={Ninad} alt="Ninad Parkar" />
      </div>
    </section>
  );
};

export default Title;
