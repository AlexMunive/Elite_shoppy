import React from "react";
import { NavLink } from "react-router-dom";
import productsImg from "../../assets/img/products.jpg";

const MainImage = () => {
    return (
        <div>
            {" "}
            <div className="">
                <img
                    src={productsImg}
                    alt=""
                    className="w-full max-h-[400px] bg-cover  bg-no-repeat object-cover object-center flex flex-wrap "
                />
                <div className="w-full flex justify-center items-center content-center gap-2 bg-gray-100 py-1">
                    <NavLink to="/" className="text-black">
                        <ion-icon name="home-outline"></ion-icon> Home /
                    </NavLink>
                    <p className="text-gray-500">Products</p>
                </div>
            </div>
        </div>
    );
};

export default MainImage;
