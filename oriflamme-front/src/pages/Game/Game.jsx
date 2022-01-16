import React, { useState } from "react";
import Board from "../../components/Board/Board";
import Families from "../../components/Families/Families";
import Footer from "../../components/Footer/Footer";
import Hand from "../../components/Hand/Hand";
import Ranking from "../../components/Ranking/Ranking";
import Turn from "../../components/Turn/Turn";
import families from "../../families";
import datas from "../../game";
import "./Game.css";

const Game = (props) => {
    const [game, setGame] = useState(datas);

    return (
        <div className="Game">
            <Board board={game.board} />
            <Families families={families} game={game} />
            <Ranking game={game} />
            <Turn />
            <Hand hand={game.players[0].hand} />
            <Footer />
        </div>
    );
};

export default Game;
