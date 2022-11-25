import React from "react";
import { additional_options } from "../Constants/Texts";
import { stone_options } from "../Constants/Texts";
import classes from "./AboutTextField.module.css";
const AboutTextField = () => {
  return (
    <div>
      <p>
        Mam do zaoferowania kominki ogrodowe (5 w 1) lub zestawy (6 w 1),
        umożliwiające grillowanie, wędzenie, gotowanie w kociołku, pieczenie na
        blasze (pizza) itp.
      </p>
      <p>
        Kominek jest nowoczesny, funkcjonalny, zbrojony, o bardzo mocnej
        strukturze i solidnej podstawie. Posiada liczne dodatki, takie jak:
        listwy aluminiowe, metalowe, które wzmacniają dodatkowo kominek.
      </p>
      <div className={classes.texts}>
        <div>
          <h3>Opcje dodatkowe:</h3>
          <ul>
            {additional_options.map(({ id, text }) => {
              return <li key={id}>{text}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3>Obłożenie kominka w zależności od rodzaju kamienia:</h3>
          <ul>
            {stone_options.map(({ id, text }) => {
              return <li key={id}>{text}</li>;
            })}
          </ul>
        </div>
      </div>
      <p>
        Budowa i funkcjonalność kominka pozwala na łączenie funkcji umożliwiając
        przyrządzanie kilku potraw na jednym palenisku (np. pieczenie na blasze
        + grillowanie + kociołek).
      </p>
    </div>
  );
};

export default AboutTextField;
