import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider.jsx";

import "flowbite";
import "boxicons";
import CartProvider from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserProvider>
        <BrowserRouter>
            <CartProvider>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </CartProvider>
        </BrowserRouter>
    </UserProvider>
);
