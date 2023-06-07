import React from "react";
import { useCartContext } from "../../context/CartProvider";
import ItemCart from "./ItemCart";
import { Link } from "react-router-dom";

const CartTotal = () => {
    const { cart, totalPrice } = useCartContext();
    if (cart.length === 0) {
        return (
            <>
                <p>no hay elementos</p>
                <Link to="/">hacer mas compras</Link>
            </>
        );
    }
    return (
        <div>
            {cart.map((product) => (
                <ItemCart key={product.id} product={product}></ItemCart>
            ))}
            <p>total: {totalPrice()}</p>
        </div>
    );
};

export default CartTotal;
