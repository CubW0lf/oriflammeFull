import React from "react";
import game from "../../game";
import Family from "../Family/Family";
import families from "../../families";
import "./Families.css";

const Families = (props) => {
  const playersFamilies = game.players.map((player) => ({ family: player.family, pseudo: player.pseudo }));
  const all = [];
  for (let h = 0; h < families.length; h++) {
    for (let i = 0; i < playersFamilies.length; i++) {
      if (playersFamilies[i].family === families[h].id) {
        families[h].player = playersFamilies[i].pseudo;
        all.push(families[h]);
      }
    }
  }
  return (
    <div className="familles">
      <h2>Familles</h2>
      <div className="container">
        {all.map((family) => (
          <Family key={family.id} couleur={family.couleur} image={family.image} pseudo={family.player} />
        ))}
      </div>
    </div>
  );
};

export default Families;
