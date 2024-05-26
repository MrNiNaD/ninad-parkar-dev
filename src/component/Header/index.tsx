import React from "react";
import style from "@/app/page.module.css";
import Link from "next/link";
import { Github, LinkedIn, Mail } from "@/assets/icons";

const Header = () => {
  const links = [
    { text: "Home", route: "#header" },
    { text: "About", route: "#header" },
    { text: "Work", route: "#header" },
  ];

  const socialMediaHandles = [
    { href: "mailto:email@example.com", component: <Mail /> },
    {
      href: "https://www.linkedin.com/in/ninad-parkar-4097881a8/",
      component: <LinkedIn />,
    },
    { href: "https://github.com/MrNiNaD", component: <Github /> },
  ];

  return (
    <header id="header" className={style.header}>
      <h1 className={style.logo}>Ninad Parkar</h1>
      <nav className={style.navigation}>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link.route}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className={style.socialMediaHandles}>
        {socialMediaHandles.map((handles, index) => {
          return (
            <li key={index}>
              <a target="_blank" href={handles.href}>
                {handles.component}
              </a>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header;
