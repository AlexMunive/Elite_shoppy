import React from "react";
import { useCartContext } from "../../context/CartProvider";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div>
            <div>
                <img src={product.img} alt="" />
            </div>
            <p>titulo: {product.title}</p>
            <p>cantidad: {product.quantity}</p>
            <p>precio u: {product.price}</p>
            <p>subtotal: {product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>eliminar</button>
        </div>
    );
};

export default ItemCart;
