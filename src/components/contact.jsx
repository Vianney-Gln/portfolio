import React from "react";
//style
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contactez moi</h2>
      <p className="phrase-contactez-moi">
        N'hésitez pas à me contacter, je me ferais un plaisir d'échanger avec
        vous
      </p>
      <form action="https://formspree.io/f/mpzbavkb" method="post">
        <label for="name">
          <input type="text" placeholder="votre nom" id="name" name="name" />
        </label>
        <label for="firstname">
          <input
            type="text"
            placeholder="votre prénom"
            id="firstname"
            name="firstname"
          />
        </label>
        <label for="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="votre email"
          />
        </label>
        <label for="message">
          <textarea name="message" id="message" placeholder="votre message" />
        </label>
        <button type="submit">Envoyer</button>
      </form>
      <p className="mail">
        <i class="far fa-envelope"></i>
        <span>vgeloen@gmail.com</span>
      </p>
      <p className="github">
        <i class="fab fa-github"></i>
        <span>
          <a href="https://github.com/Vianney-Gln">
            https://github.com/Vianney-Gln
          </a>
        </span>
      </p>
    </div>
  );
};

export default Contact;