"use client";
import React from "react";
import style from "@/app/page.module.css";
import Lottie from "react-lottie";
import animationData from "@/assets/image/Animation - 1716837528895.json";
import { socialMediaHandles } from "@/configs";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className={style.aboutSectionStyle} id="contact">
      <h3
        className={`${style.heading2} ${style.designation} ${style.sectionTitle}`}
      >
        contact.
      </h3>

      <div className={style.contactContent}>
        <Lottie
          style={{ margin: "0" }}
          options={defaultOptions}
          height={400}
          width={400}
        />
        <ul>
          {socialMediaHandles.map((handles, index) => {
            return (
              <li key={index}>
                <a target="_blank" href={handles.href}>
                  {handles.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
