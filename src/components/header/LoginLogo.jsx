import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import { Alert } from "@mui/material";
import { useCartContext } from "../../context/CartProvider";

const LoginLogo = () => {
    const { user, signOutUser } = useContext(UserContext);

    // const { totalProducts } = useCartContext();

    const handleCLickLogout = async () => {
        try {
            await signOutUser();
            // await totalProducts();
        } catch (error) {
            console.log(error.code);
        }
    };

    return (
        <div>
            {user ? (
                <>
                    {/* <NavLink to="/">Inicio /</NavLink> */}
                    <button
                        onClick={handleCLickLogout}
                        className="font-thin font-cantarell text-xs sm:text-base ml-5 flex justify-center flex-wrap items-center border-2 border-[#ff9b05] py-1 px-3  gap-2"
                    >
                        SIGN OFF<ion-icon name="log-out-outline"></ion-icon>
                    </button>
                    {/* <Alert severity="success">sesión cerrado completo!</Alert> */}
                </>
            ) : (
                <>
                    <NavLink
                        to="/login"
                        className="font-cantarell text-base ml-5 flex justify-center items-center border-2 border-[#ff9b05] py-1 px-2 gap-2"
                    >
                        <p className="">LOGIN</p>
                        <ion-icon name="log-in-outline"></ion-icon>
                    </NavLink>
                    {/* <NavLink to="/register">Register /</NavLink> */}
                </>
            )}
        </div>
    );
};

export default LoginLogo;
