import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import "./Profile.css";

const Profile = () => {
    const [playerInfos, setPlayerInfos] = useState();
    const { player } = useContext(PlayerContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/player/${player.id}`).then(({ data }) => {
            setPlayerInfos(data);
        });
    }, [player]);

    return (
        <div className="Profile">
            <h1>Profil de {playerInfos?.pseudo}</h1>
            <div className="input-container">
                <input type="text" value={playerInfos?.email} />
                <button>Modifier Mail</button>
            </div>

            <div className="password-container">
                <input type="password" placeholder="Ancien Mot de Passe" />
                <input type="password" placeholder="Nouveau Mot de Passe" />
                <input type="password" placeholder="Vérifier nouveau Mot de Passe" />
                <button>Modifier Mot de Passe</button>
            </div>
        </div>
    );
};

export default Profile;
