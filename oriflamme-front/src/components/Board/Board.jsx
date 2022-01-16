import React from "react";
import Carte from "../Carte/Carte";
import cartes from "../../cartes";
import "./Board.css";

const Board = (props) => {
  const board = [];
  for (let h = 0; h < cartes.length; h++) {
    for (let i = 0; i < props.board.length; i++) {
      if (props.board[i].id === cartes[h].id) {
        cartes[h].player = props.board[i].player;
        cartes[h].state = props.board[i].state;
        //TODO ajouter la famille pour affichage
        board.push(cartes[h]);
      }
    }
  }

  console.log(board);

  return (
    <div className="Board">
      {board.map((carte) =>
        carte.state === 1 ? (
          <div key={carte.id}>
            <span>{carte.player}</span>
            <Carte nom={carte.nom} image={carte.image} desc={carte.description} player={carte.player} />
          </div>
        ) : (
          <div>
            <span>{carte.player}</span>
            <Carte
              key={carte.id}
              nom={carte.nom}
              image={carte.player.family}
              desc={carte.description}
              player={carte.player}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Board;
