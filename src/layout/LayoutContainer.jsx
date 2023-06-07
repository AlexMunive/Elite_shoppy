import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LayoutContainer = () => {
    return (
        <div className="mx-auto flex max-w-7xl flex-col  content-center justify-center self-center">
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LayoutContainer;
