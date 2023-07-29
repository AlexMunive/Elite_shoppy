import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartProvider";

const CartWidget = () => {
    const { totalProducts } = useCartContext();

    // useEffect(() => {
    //     totalProducts();
    // }, [totalProducts]);

    return (
        <div className="cursor-pointer">
            <NavLink
                to="/cart"
                className=" cursor-pointer text-[#ff9b05] text-3xl mr-5 bg-transparent"
            >
                <ion-icon name="cart-outline"></ion-icon>
                <span className="text-xl">{totalProducts() || ""}</span>
            </NavLink>
        </div>
    );
};

export default CartWidget;
