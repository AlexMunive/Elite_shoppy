import React, { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";

const CartTotal = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <div class="h-[400px] flex justify-center items-center">
                    <div class="relative">
                        <div class="text-white animate-bounce top-0 right-0 mt-2 mr-2 bg-[#ff9b05] px-2 py-1 rounded-lg">
                            <Link to="/">
                                No hay elementos, Desea hacer compras ? 🛒
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <p>no hay elementos</p>
                <Link to="/">hacer mas compras</Link> */}
            </>
        );
    }
    return (
        <div className="flex flex-col ">
            <div className="flex flex-row gap-5 my-5 flex-wrap justify-center items-center  content-center">
                {cart.map((product) => (
                    <ItemCart key={product.id} product={product}></ItemCart>
                ))}
            </div>
            <hr />
            <p className="my-5 ml-5 md:ml-0">
                <b>Total:</b> S/.{totalPrice()}
            </p>

            <div className="flex gap-2 ml-5 md:ml-0">
                <button
                    onClick={() => clearCart()}
                    className="bg-black mt-2 text-white py-2 hover:scale-105 px-5"
                >
                    {" "}
                    Vaciar Carrito{" "}
                </button>
                <Link
                    className="bg-black mt-2 text-white py-2 hover:scale-105 px-5"
                    to="/checkout"
                >
                    {" "}
                    Finalizar Compra{" "}
                </Link>
            </div>
        </div>
    );
};

export default CartTotal;
