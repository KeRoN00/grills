import React from "react";
import classes from "./About.module.css";
import { about_texts } from "../Constants/Texts";
const About = () => {
  return (
    <div className={classes.about}>
        <div className={classes.blank} />
        <h1>Opis kominków</h1>
        <div className={classes.aboutContent}>
          <ul>
          {about_texts.map(({ text, title}) => {
            return <li key={title}>{text}</li>;
          })}
          </ul>
        </div>
        <div className={classes.blank} />
    </div>
  );
};

export default About;
