"use client";
import React from "react";
import style from "@/app/page.module.css";
import Lottie from "react-lottie";
import animationData from "@/assets/image/Animation - 1716837528895.json";

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
    <section id="contact">
      <h3
        className={`${style.heading2} ${style.designation} ${style.sectionTitle}`}
      >
        contact.
      </h3>

      <div>
        <Lottie
          style={{ margin: "0" }}
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    </section>
  );
};

export default Contact;
