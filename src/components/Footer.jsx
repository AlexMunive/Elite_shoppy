import React from "react";
import Contact from "./footer/Contact";
import Information from "./footer/Information";
import Category from "./footer/Category";
import Profile from "./footer/Profile";

const Footer = () => {
    return (
        <div className="mb-4 flex flex-col content-center">
            <div className="flex flex-row flex-wrap justify-between sm:flex-row">
                <Contact />
                <Information />
                <Category />
                <Profile />
            </div>
            <h2 className="text-center font-roboto">
                © 2023 Fashion Club. All rights reserved | Design by{" "}
                <em className="not-italic text-[#ff9b05]">
                    Alexander Munive Choque
                </em>
            </h2>
        </div>
    );
};

export default Footer;
