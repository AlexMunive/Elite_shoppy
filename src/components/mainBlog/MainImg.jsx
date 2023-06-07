import React from "react";
import blogImg from "../../assets/img/blog.jpg";
import { NavLink } from "react-router-dom";

const MainImg = () => {
    return (
        <div className="">
            <img
                src={blogImg}
                alt=""
                className="w-full max-h-[400px] bg-cover  bg-no-repeat object-cover object-center flex flex-wrap "
            />
            <div className="w-full flex justify-center items-center content-center gap-2 bg-gray-100 py-1">
                <NavLink to="/" className="text-black">
                    <ion-icon name="home-outline"></ion-icon> Home /
                </NavLink>
                <p className="text-gray-500">Blog's</p>
            </div>
        </div>
    );
};

export default MainImg;
