import React, { useRef } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className={classes.contact} id="Contact">
      <h1>Kontakt</h1>
      <div className={classes.content}>
        <div className={classes.left}>
          <div>
          <h3>Telefon</h3>
          <p>+48012345678</p>
          </div>
          <div>
          <h3>Adres</h3>
          <p>Świerklany </p>
          <p>ul. Słoneczna 14</p>
          </div>
        </div>
        <div className={classes.right}>
          <form onSubmit={formSubmitHandler}>
          <input type="email" placeholder="E-mail" ref={emailInputRef} />
          <textarea placeholder="Wiadomość" ref={messageInputRef}></textarea>
          <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
