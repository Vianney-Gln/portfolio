import React from "react";
//node module react slideShow
import { Slide } from "react-slideshow-image";
//import data projets
import projets from "../data/projets";
//style
import "../styles/porte-folio.scss";
import "react-slideshow-image/dist/styles.css";

const PorteFolio = () => {
  return (
    <div className="porteFolio" id="porte-folio">
      <h2>Porte folio</h2>
      <p>
        Vous trouverez ci dessous les projets réalisés pendant la formation.
        <br></br>2 projets fictifs ont déjà été effectués, un troisième est en
        cours et sera réalisé pour un vrais client!
      </p>
    </div>
  );
};

export default PorteFolio;
