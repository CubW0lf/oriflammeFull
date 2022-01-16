import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext.js";
import { PlayerContext } from "./contexts/PlayerContext.js";
import { ProtectedRoute } from "./protected/ProtectedRoute.js";
import axios from "axios";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Rules from "./pages/Rules/Rules";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile.jsx";
import Game from "./pages/Game/Game";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [player, setPlayer] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get("http://localhost:5000/security/player-is-auth", {
                    headers: {
                        "x-access-token": token,
                    },
                })
                .then(({ data }) => {
                    if (data.auth) {
                        setIsAuthenticated(true);
                        setPlayer(JSON.parse(localStorage.getItem("player")));
                    }
                })
                .catch(() => {
                    localStorage.removeItem("token");
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <PlayerContext.Provider value={{ player, setPlayer }}>
                <Navbar />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/rules" element={<Rules />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />

                        <Route path="player" element={<ProtectedRoute />}>
                            <Route path="profile" element={<Profile />} />
                            <Route path="game" element={<Game />} />
                        </Route>
                    </Routes>
                </main>
            </PlayerContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
