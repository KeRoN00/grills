import React from "react";
import classes from "./About.module.css";
import TextField from "../UI/TextField";

const about_texts = [
  {
    id: 1,
    title: "Kominek K1",
    text: "Masa bitumiczna 1+1 plastyfikator, jedno zbrojenie, listwa paleniska aluminiowa o grubości 8mm, półka betonowa prawa lub lewa strona, zbrojona, kafelki położone częściowo w górnej partii kominka. Ruszt metalowy, górne zamknięcie metalowe o grubości 2mm. Cztery poziomy wędzenia i grillowania. Montaż samego kominka w cenie, transport do 20km – 50zł.",
  },
  {
    id: 2,
    title: "Kominek K2",
    text: "Masa bitumiczna 2+2 plastyfikatory, dwa zbrojenia, listwy paleniska, półki paleniska i półki bocznej (aluminiowe) o grubości 8mm. Półka betonowo granitowa prawa lub lewa strona. Kafelki położone częściowo całego kominka na kleju mrozoodpornym z dodatkiem mikro włókien. Ruszt chromowany, zamknięcie dolne i górne z blachy 2,5mm z szybką żaroodporną. Pięć poziomów wędzenia i cztery grillowania z możliwością pieczenia na blasze i gotowania w kociołku. Montaż samego kominka w cenie, transport do 20km – 50zł.",
  },
  {
    id: 3,
    title: "Kominek K3",
    text: "Masa bitumiczna 3+3 plastyfikatory z dodatkiem kleju mrozoodpornego, trzy zbrojenia, aluminiowe listwy, dolne środkowe i górne części w całości + półki o grubości 10mm. Półka betonowo granitowa, potrójnie zbrojona, prawa lub lewa strona. W zależności od modelu kominka do dyspozycji jest kamień naturalny z dodatkiem płytek mrozoodpornych w dolnej i częściowo w środkowej partii kominka, które są klejone na dwóch klejach: mrozowym i polimerowym z dodatkiem mikro włókien. Ruszt chromowo niklowy, metalowa płyta paleniska o grubości 6mm. Dodatkowa płyta metalowa nad palenisko , co pozwala na pieczenie na blasze i gotowanie w kociołku. Trzy zamknięcia z blachy 3mm, górne i środkowe zamknięcie z szybą żaroodporną. Sześć poziomów wędzenia i cztery grillowania. Montaż kominka w cenie, transport do 20km – 50zł.",
  },
];

const About = () => {
  return (
    <div className={classes.about} id="About">
    <div className={classes.horizontal}/>
      <h1>Opis kominków</h1>
      {about_texts.map(({text, title, id}) => {
        return (
            <TextField key={id} title={title} text={text}/>      
        );
      })} 
    </div>
  );
};

export default About;
