import React from "react";
import { NavLink } from "react-router-dom";

const Offer = () => {
    return (
        <div className="my-20  flex flex-wrap justify-center items-center content-center flex-col px-4">
            <h1 className="text-center text-3xl font-roboto">
                Are you ready for awesomeness? Flat{" "}
                <em className="not-italic text-[#ff9b05]">50% offer</em> for
                women
            </h1>
            <p className="text-center max-w-[600px] text-gray-600 my-5 font-cantarell">
                The super promotion for the ladies has arrived, do not miss this
                opportunity, we have new and exclusive designs per season
            </p>
            <h2 className="text-center font-roboto text-base flex gap-2 items-center text-[#ff9b05] hover:text-black cursor-pointer">
                <NavLink to="/products" className="flex gap-2 items-center">
                    SHOP NOW<ion-icon name="arrow-forward-outline"></ion-icon>
                </NavLink>
            </h2>
        </div>
    );
};

export default Offer;
