import React from "react";
import style from "@/app/page.module.css";
import Image from "next/image";
import CarDodging2 from "@/assets/image/car-doging-2.gif";
import CarDodging from "@/assets/image/car-doging.gif";

const Project = () => {
  const config = [
    {
      projectTitle: "Car Dodging",
      previewImg: [
        { src: CarDodging, alt: "Car Dodging Pic 1" },
        { src: CarDodging2, alt: "Car Dodging Pic 2" },
      ],
      link: "https://mrninad.github.io/car-game/",
    },
  ];

  return (
    <section className={style.aboutSectionStyle} id="project">
      <h3
        className={`${style.heading2} ${style.designation} ${style.sectionTitle}`}
      >
        project.
      </h3>

      <ul className={style.projectListing}>
        {config.map((eachConfig, index) => {
          return (
            <li key={index}>
              <span
                className={`${style.paragraph} ${style.aboutText} ${style.projectTitle}`}
              >
                {eachConfig.projectTitle}
              </span>
              <div className={style.previewImgContainer}>
                {Array.isArray(eachConfig.previewImg) &&
                  eachConfig.previewImg.map((eachImgConfig, index) => {
                    return (
                      <Image
                        key={index}
                        width={200}
                        src={eachImgConfig.src}
                        alt={eachImgConfig.alt}
                      />
                    );
                  })}
              </div>
              <div className={style.projectLinkContainer}>
                <span
                  className={`${style.paragraph} ${style.aboutText} ${style.projectLink}`}
                >
                  Link:{" "}
                  <a target="_blank" href={eachConfig?.link}>
                    {eachConfig?.link}
                  </a>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Project;
