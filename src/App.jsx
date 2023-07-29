import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import RequiredAuth from "./components/RequiredAuth";
import Register from "./routes/Register";
import { UserContext } from "./context/UserProvider";
import Products from "./routes/Products";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Mail from "./routes/Mail";
import LayoutContainer from "./layout/LayoutContainer";
import ItemDetailContainer from "./components/mainProducts/ItemDetailContainer";
import NotFound from "./layout/NotFound";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
    const { user } = useContext(UserContext);
    if (user === false) {
        return (
            <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-[#ff9b05] border-solid mb-4"></div>
                <h1 class="text-gray-800 text-xl font-semibold">Cargando...</h1>
            </div>
        );
    }
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutContainer />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/products" element={<Products />}></Route>
                    <Route
                        path="/products/categoria/:categoriaId"
                        element={<Products />}
                    ></Route>
                    <Route
                        path="/product/detalle/:detalleId"
                        element={<ItemDetailContainer />}
                    ></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/mail" element={<Mail />}></Route>
                    <Route
                        path="/cart"
                        element={
                            <RequiredAuth>
                                <Cart />
                            </RequiredAuth>
                        }
                    ></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    );
};

export default App;
