import React from "react";
import style from "@/app/page.module.css";
import Link from "next/link";
import { socialMediaHandles } from "@/configs";

const Header = () => {
  const links = [
    { text: "About", route: "#about" },
    { text: "Skills", route: "#skills" },
    { text: "Project", route: "#project" },
    { text: "Work", route: "#work" },
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
