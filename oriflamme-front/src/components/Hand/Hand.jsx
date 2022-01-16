import React from "react";
import Carte from "../Carte/Carte";
import cartes from "../../cartes";
import "./Hand.css";

const Hand = (props) => {
  // je veux toutes les cartes qui ont le même ID que ma main
  // Je parcoure les cartes et si elles ont un id similaire a l'itération en cours alors je le place dans main
  const main = [];
  for (let h = 0; h < 7; h++) {
    // pour chaque carte je parcours mon tableau hand
    for (let i = 0; i < cartes.length; i++) {
      //je parcours toutes les cartes
      if (props.hand[h] === cartes[i].id) {
        // si l'identifiant d'une carte est similaire à un des chiffres

        main.push(cartes[i]); // Je l'ajoute au tableau main
      }
    }
  }
  return (
    <div className="Hand">
      {main.map((carte) => (
        <Carte key={carte.id} nom={carte.nom} image={carte.image} desc={carte.description} />
      ))}
    </div>
  );
};

export default Hand;
