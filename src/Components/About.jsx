import React, { useEffect } from "react";
import classes from "./About.module.css";
import { about_texts } from "../Constants/Texts";
const About = () => {

  

  return (
    <div className={classes.about}>
      <div className={classes.aboutContent}>
        <div className={classes.aboutText}>
          <div className={classes.texts}>
          <h1>Opis kominków</h1>
            <h2>
              Mam do zaoferowania kominki ogrodowe (5w1) lub zestawy (6w1),
              umożliwiające grillowanie, wędzenie, gotowanie w kociołku,
              pieczenie na blasze (pizza) itp. Niektóre funkcje można łączyć ze sobą na jednym palenisku.
            </h2>
            <h2>
              Kominki są nowoczesne, funkcjonalne, zbrojone, o bardzo mocnej
              strukturze i solidnej podstawie. Posiadają liczne dodatki, takie
              jak: półki boczne betonowe (czesto z dodatkiem granitu lub marmuru), listwy aluminiowe lub metalowe, które wzmacniają i dodatkowo zdobią
              kominek.
            </h2>
          </div>
        </div>
        <h1>Kategorie Kominków</h1>
        <div className={classes.grillClasses}>
          {about_texts.map(({ text, title, id }) => {
            return (
              <div className={classes.grillClass} key={id}>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
