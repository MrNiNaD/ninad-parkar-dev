import React from "react";
import style from "@/app/page.module.css";

const Project = () => {
  return (
    <section className={style.aboutSectionStyle} id="about">
      <h3
        className={`${style.heading2} ${style.designation} ${style.sectionTitle}`}
      >
        project.
      </h3>
      <p className={`${style.paragraph} ${style.aboutText}`}>Coming soon...</p>
    </section>
  );
};

export default Project;
