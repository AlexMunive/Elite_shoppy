import React from "react";
import MainImage from "./MainImage";
import { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);

    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    };
    return (
        <div>
            <MainImage></MainImage>
            <div className="flex flex-row flex-wrap gap-5 justify-center my-5">
                <div>
                    <Carousel
                        showStatus="false"
                        axis="horizontal"
                        autoPlay="true"
                        infiniteLoop="true"
                        className="max-w-[300px] sm:max-w-[500px] flex flex-col justify-center items-center content-center "
                    >
                        <div className="">
                            <img className="" src={data.img} />
                            <p className="legend">Producto nuevo</p>
                        </div>
                        <div className="">
                            <img className="" src={data.img2} />
                            <p className="legend">Dieño unico</p>
                        </div>
                        <div className="">
                            <img className="" src={data.img3} />
                            <p className="legend">Alta calidad</p>
                        </div>
                        <div className="">
                            <img className="" src={data.img4} />
                            <p className="legend">Unico</p>
                        </div>
                        <div className="">
                            <img className="" src={data.img5} />
                            <p className="legend">Elegancia</p>
                        </div>
                    </Carousel>
                </div>
                <div className="flex flex-col px-4">
                    <h1 className="text-center font-roboto text-3xl font-medium">
                        {data.title}
                    </h1>
                    <p className="text-center text-xl font-normal my-5">
                        S/. {data.price}.00
                    </p>
                    <p className="max-w-[600px] float-none font-cantarell">
                        {data.details}
                    </p>
                    <div>
                        <p className="font-cantarell my-3 underline ">
                            Modelos
                        </p>
                        <div className="flex gap-5">
                            <img
                                src={data.model1}
                                alt=""
                                className="w-20 border-none"
                            />
                            <img
                                src={data.model2}
                                alt=""
                                className="w-20 border-none"
                            />
                            <img
                                src={data.model3}
                                alt=""
                                className="w-20 border-none "
                            />
                        </div>
                    </div>
                    <div>
                        <p className="my-2 font-cantarell underline ">
                            Colores
                        </p>
                        <div className="flex gap-5">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-xs font-cantarell">
                                    {data.color}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-xs font-cantarell">
                                    {data.color2}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-xs font-cantarell">
                                    {data.color3}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="font-cantarell">
                        <div className="flex items-center gap-2">
                            <i className="bx bx-ruler"></i>
                            <p className="my-4 font-cantarell underline ">
                                Tallas
                            </p>
                        </div>
                        {data.talla}
                    </div>
                    <div>
                        {goToCart ? (
                            <div className="my-5 flex flex-wrap gap-2">
                                <Link
                                    to="/cart"
                                    className="bg-black mt-2 text-white py-2 hover:scale-105 px-5"
                                >
                                    Terminar compra
                                </Link>
                                <Link
                                    to="/products"
                                    className="bg-black mt-2 text-white py-2 hover:scale-105 px-5"
                                >
                                    Seguir comprando
                                </Link>
                            </div>
                        ) : (
                            <>
                                <p className="my-4 font-cantarell underline ">
                                    Cantidad
                                </p>
                                <ItemCount
                                    initial={1}
                                    onAdd={onAdd}
                                ></ItemCount>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
