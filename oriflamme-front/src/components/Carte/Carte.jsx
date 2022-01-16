import React, { useState } from "react";
import "./Carte.css";

const Carte = (props) => {
  const [mouseDown, setMouseDown] = useState(false);

  const onMouseDown = () => {
    setMouseDown(true);
  };

  const onMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <img
      className={`Carte ${mouseDown ? "mousedown" : ""}`}
      src={props.image}
      alt={props.nom}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      title={props.player}
    />
  );
};

export default Carte;
