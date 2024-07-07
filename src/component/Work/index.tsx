import React from "react";
import style from "@/app/page.module.css";

const Work = () => {
  const workExperience = [
    {
      designation: "SDE2 in Eszmeletlen Ho. Co. (also known as MakeStories)",
      place: "Mumbai, Maharashtra",
      duration: "Year 2021 – Present",
    },
    {
      designation: "Web Developer in Axioned",
      place: "Mumbai, Maharashtra",
      duration: "Year 2020 – 2021",
    },
  ];

  return (
    <section
      className={`${style.aboutSectionStyle} ${style.workSectionStyle}`}
      id="about"
    >
      <h3
        className={`${style.heading2} ${style.designation} ${style.sectionTitle}`}
      >
        work.
      </h3>

      <ul className={style.workData}>
        {workExperience.map((work, index) => (
          <li key={index}>
            <span className={`${style.paragraph} ${style.workDetails}`}>
              {work.designation}
            </span>
            <span className={`${style.paragraph} ${style.workDetails}`}>
              {work.place}
            </span>
            <span className={`${style.paragraph} ${style.workDetails}`}>
              {work.duration}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Work;
