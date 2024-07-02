import React from "react";
import style from "@/app/page.module.css";

const About = () => {
  return (
    <section
      data-aos="fade-left"
      className={style.aboutSectionStyle}
      id="about"
    >
      <h3
        className={`${style.heading2} ${style.designation} ${style.sectionTitle}`}
      >
        about.
      </h3>
      <p className={`${style.paragraph} ${style.aboutText}`}>
        I am a Front-end Developer with extensive experience in frameworks and
        libraries such as React, Next.js, Svelte, jQuery, and Express. I have a
        strong command of Git, HTML, CSS, and JavaScript. I am seeking a highly
        motivated team where I can showcase my skills and contribute significant
        value to the company.
      </p>
    </section>
  );
};

export default About;
