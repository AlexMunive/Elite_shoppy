import React from "react";
import logo from "../../assets/img/logo.png";

const Title = () => {
    return (
        <div>
            <div className="flex flex-row text-center justify-center">
                <img
                    src={logo}
                    alt="logo-shoping"
                    className=" h-8 w-auto 
                "
                />
                <h1 className=" font-roboto text-lg  sm:text-4xl font-medium">
                    Elite Shoppy
                </h1>
            </div>
            <h2 className="text-center font-cantarell text:base sm:text-base font-normal tracking-[0.3em]">
                For Fashion Lovers
            </h2>
        </div>
    );
};

export default Title;
