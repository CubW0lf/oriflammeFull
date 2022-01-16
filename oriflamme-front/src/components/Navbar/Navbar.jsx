import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PlayerContext } from "../../contexts/PlayerContext";
import { Link } from "react-router-dom";
import Logged from "../Logged/Logged";
import NotLogged from "../NotLogged/NotLogged";
import "./Navbar.css";

const Navbar = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const { setPlayer } = useContext(PlayerContext);
    const logout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        setPlayer({});
        window.location.href = "/";
    };
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/rules">Règles</Link>
                </li>
            </ul>
            <h1>
                <Link to="/">Oriflamme</Link>
            </h1>
            {isAuthenticated ? <Logged logout={logout} /> : <NotLogged />}
        </nav>
    );
};

export default Navbar;
