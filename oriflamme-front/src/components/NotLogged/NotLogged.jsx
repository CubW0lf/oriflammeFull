import React from "react";
import { Link } from "react-router-dom";

const NotLogged = () => {
  return (
    <ul>
      <li>
        <Link to="/register">Inscription</Link>
      </li>
      <li>
        <Link to="/login">Se Connecter</Link>
      </li>
    </ul>
  );
};

export default NotLogged;
