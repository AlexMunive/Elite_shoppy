import React from "react";
import emailImg from "../../assets/img/email.jpg";
import { NavLink } from "react-router-dom";

const MainImage = () => {
    return (
        <div className="">
            <img
                src={emailImg}
                alt=""
                className="w-full max-h-[400px] bg-cover  bg-no-repeat object-cover object-center flex flex-wrap "
            />
            <div className="w-full flex justify-center items-center content-center gap-2 bg-gray-100 py-1">
                <NavLink to="/" className="text-black">
                    <ion-icon name="home-outline"></ion-icon> Home /
                </NavLink>
                <p className="text-gray-500">Mail Us</p>
            </div>
        </div>
    );
};

export default MainImage;
