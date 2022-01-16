import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
    const url = "http://localhost:5000/security/login";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            const player = { email: email, password: password };
            axios.post(url, player).then(({ data }) => {
                if (data.error) setError(data.error);
                else {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("player", JSON.stringify(data.player));
                    window.location.href = "/player/profile";
                }
            });
        } else {
            setError("Veuillez entrez l'email et le mot de passe");
        }
    };

    return (
        <div className="Login">
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit}>
                {error && <p>{error}</p>}
                <input type="text" value={email} placeholder="Mail" onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    value={password}
                    placeholder="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Se Connecter</button>
            </form>
        </div>
    );
};

export default Login;
