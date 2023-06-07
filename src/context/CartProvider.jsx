import React from "react";
import { useContext } from "react";
import { useState } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // const { user, signOutUser } = useContext(UserContext);

    const isInCart = (id) =>
        cart.find((product) => product.id === id) ? true : false;

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(
                cart.map((product) => {
                    return product.id === item.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product;
                })
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // console.log("cart:", cart);

    const totalPrice = () => {
        return cart.reduce(
            (acumulador, currentValue) =>
                acumulador + currentValue.quantity * currentValue.price,
            0
        );
    };

    const totalProducts = () => {
        return cart.reduce(
            (acumulador, currentValue) => acumulador + currentValue.quantity,
            0
        );
    };

    // limpiar carrito

    const clearCart = () => setCart([]);

    // eliminar compra

    const removeProduct = (id) =>
        setCart(cart.filter((product) => product.id !== id));

    return (
        <CartContext.Provider
            value={{
                isInCart,
                addProduct,
                totalPrice,
                totalProducts,
                clearCart,
                removeProduct,
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
