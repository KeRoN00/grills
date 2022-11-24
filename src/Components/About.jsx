import React from "react";
import classes from "./About.module.css";
import TextField from "../UI/TextField";
import AboutTextField from "./AboutTextField";
import { about_texts } from "../Constants/Texts";


const About = () => {
  return (
    <div className={classes.about} id="About">
      <div className={classes.polygon}>
      <h1>Opis kominków</h1>
      <div className={classes.aboutContent}>
      <AboutTextField/>
      {about_texts.map(({ text, title, id }) => {
        return <TextField key={id} title={title} text={text} />;
      })}
      </div>
      </div>
    </div>
  );
};

export default About;