import React from "react";
import style from "@/app/page.module.css";

const Skills = () => {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Svelte",
    "JQuery",
    "HTML",
    "CSS",
    "Vanilla Js",
    "Express",
    "Mongo DB",
  ];

  return (
    <section className={style.aboutSectionStyle} id="skills">
      <h3
        className={`${style.heading2} ${style.designation} ${style.sectionTitle}`}
      >
        skills.
      </h3>

      <ul className={style.skillContainer}>
        {skills.map((skill) => (
          <li className={style.paragraph}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
