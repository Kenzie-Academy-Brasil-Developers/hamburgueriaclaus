import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Outlet , Navigate } from "react-router-dom";

export function RoutesAuth() {
    const { user , loading } = useContext(UserContext);
    console.log(user)

    if (loading) return null

    return user ? <Outlet/> : <Navigate to='/'/>
}