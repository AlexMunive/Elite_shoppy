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

const App = () => {
    const { user } = useContext(UserContext);
    if (user === false) {
        return <p>loading...</p>;
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
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </>
    );
};

export default App;
