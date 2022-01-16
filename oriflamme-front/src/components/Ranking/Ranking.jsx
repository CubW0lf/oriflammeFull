import React from "react";
import "./Ranking.css";

const Ranking = ({ game }) => {
  return (
    <div className="Ranking">
      <h2>Classement</h2>
      <div className="joueurs">
        {game.players.map((player) => (
          <span className="rank" key={player.id}>{` ${player.pseudo} : ${player.points}`}</span>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
