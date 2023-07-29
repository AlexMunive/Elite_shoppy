import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
    // console.log(info);
    return (
        <div className=" transform transition-transform hover:scale-105 duration-200 ease md:max-w-[250px] max-w-[130px] border border-solid border-[#ff9b05] md:border-none  ">
            <Link to={`/product/detalle/${info.id}`}>
                <i className="bx bx-heart absolute mt-2 ml-2"></i>
                <img
                    // className="max-w-[110px] md:max-w-[250px] "
                    src={info.img}
                    alt=""
                />
                <div>
                    <h1 className="text-sm md:text-base pl-2">{info.title}</h1>
                    <h2 className="text-sm md:text-base pl-2 pb-2">
                        S/. {info.price}.00
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default Item;
