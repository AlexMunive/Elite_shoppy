import React from "react";
import Title from "./header/Title";
import LoginLogo from "./header/LoginLogo";
import CartWidget from "./header/CartWidget";

const Header = () => {
    return (
        <div className="mt-4 flex flex-row items-center justify-between ">
            <LoginLogo />
            <Title />
            <CartWidget />
        </div>
    );
};

export default Header;
