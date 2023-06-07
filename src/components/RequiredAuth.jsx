import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";

const RequiredAuth = ({ children }) => {
    const { user } = useContext(UserContext);

    if (!user) {
        // return Swal.fire("inicie sesión porfavor");
        // return alert("por favor inicie sesión");
        // return <Alert severity="info">Por favor inicia sesión!</Alert>;
        return <Navigate to="/login" />;
    }

    return children;
};

export default RequiredAuth;
