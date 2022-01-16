import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { Link } from "react-router-dom";
import "./Logged.css";

const Logged = ({ logout }) => {
    const { player } = useContext(PlayerContext);
    return (
        <ul>
            <li>
                <Link to="/player/profile">{player.pseudo}</Link>
            </li>
            <li className="logout" onClick={logout}>
                Déconnexion
            </li>
        </ul>
    );
};

export default Logged;
