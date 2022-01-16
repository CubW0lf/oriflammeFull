import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const player = JSON.parse(localStorage.getItem("player"));

    return player ? <Outlet /> : <Navigate to="/" />;
};
