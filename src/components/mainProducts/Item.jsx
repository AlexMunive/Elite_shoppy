import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
    return (
        <div>
            <Link to={`/product/detalle/${info.id}`}>
                {" "}
                <i className="bx bx-heart absolute mt-2 ml-2"></i>
                <img className="max-w-[250px]" src={info.img} alt="" />
                <h1>{info.title}</h1>
                <h2>S/. {info.price}.00</h2>
            </Link>
        </div>
    );
};

export default Item;
