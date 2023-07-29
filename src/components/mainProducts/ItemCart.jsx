import React from "react";
import { useCartContext } from "../../context/CartProvider";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="flex gap-1 flex-col justify-center justify-items-center place-content-center place-items-center w-[220px] rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-200 ease">
            <img src={product.img} alt="" className="w-[150px]" />
            <h3 className="flex justify-self-center flex-col justify-center justify-items-center place-content-center place-items-center">
                <b className="flex justify-center justify-items-center place-content-center place-items-center">
                    Titulo:
                </b>{" "}
                <p className="text-center ">{product.title}</p>
            </h3>
            <p>
                <b>Cantidad:</b> {product.quantity}
            </p>
            <p>
                <b>Precio u:</b> S/.{product.price}
            </p>
            <p>
                <b>Subtotal:</b> S/.{product.quantity * product.price}
            </p>
            <button onClick={() => removeProduct(product.id)} className="mb-5">
                Eliminar{" "}
                <span className="text-blac">
                    <ion-icon
                        name="trash-outline"
                        className="text-[#ff9b05]"
                    ></ion-icon>
                </span>
            </button>
        </div>
    );
};

export default ItemCart;
