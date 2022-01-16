import React from "react";
import "./Family.css";

const Family = (props) => {
  return <img className="Family" src={props.image} alt={props.couleur} title={props.pseudo} />;
};

export default Family;
