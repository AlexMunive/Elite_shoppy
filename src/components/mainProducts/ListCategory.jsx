import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ListCategory = () => {
    const [open, setOpen] = useState(false);

    let Links = [
        { name: "Mujer" },
        { name: "Hombre" },
        { name: "Bebé" },
        { name: "Niños" },
    ];

    const handleClick = (e) => {};

    return (
        <div className="flex flex-col">
            <h1 className="font-roboto text-2xl">Categorias</h1>
            <NavLink to="/products">todos</NavLink>{" "}
            <div className="relative left-0 top-0 z-10 w-full">
                <div className="md:flex md:px-10 items-center  justify-center bg-white py-4">
                    <div
                        onClick={() => setOpen(!open)}
                        className="md:hidden flex cursor-pointer items-center justify-center text-3xl text-[#ff9b05]"
                    >
                        <ion-icon name={open ? "close" : "menu"}></ion-icon>
                    </div>

                    <ul
                        className={`md:static md:flex  md:w-auto md:items-center md:bg-white md:pb-0 md:pl-0 absolute left-0 w-full bg-white pb-5 pl-9 transition-all duration-500 ease-in ${
                            open
                                ? "right-20 bg-gray-200"
                                : "left-[-767px] transition-all duration-500 ease-in "
                        }`}
                    >
                        {Links.map((link) => (
                            <li
                                key={link.name}
                                className="md:my-0 md:ml-8 md:text-lg my-4 font-roboto text-sm font-light "
                            >
                                <button className="duration-200 focus:text-[#ff9b05] bg-white ">
                                    <div onClick={handleClick}>{link.name}</div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <div>
                <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="p-4 w-full flex items-center justify-between bg-red-400 font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
                    >
                        dropdown
                        {!isOpen ? (
                            <i className="bx bxs-down-arrow"></i>
                        ) : (
                            <i className="bx bxs-up-arrow"></i>
                        )}
                    </button>
                    {isOpen && (
                        <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                            <ul className="flex flex-col w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4 p-4">
                                <li onClick={() => setIsOpen(!isOpen)}>
                                    <NavLink to="/products/categoria/casacas-y-abrigos">
                                        Casacas y Abrigos
                                    </NavLink>{" "}
                                </li>
                                <li onClick={() => setIsOpen(!isOpen)}>
                                    <NavLink to="/products/categoria/chompas-y-cardigans">
                                        Chompas y Cardigans
                                    </NavLink>{" "}
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div> */}
            <div>
                <h1 className="font-roboto text-xl text-[#ff9b05]">Mujer</h1>
                <ul>
                    <li>
                        <NavLink to="/products/categoria/casacas-y-abrigos">
                            Casacas y Abrigos
                        </NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/products/categoria/chompas-y-cardigans">
                            Chompas y Cardigans
                        </NavLink>{" "}
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="font-roboto text-xl text-[#ff9b05]">Hombres</h1>
                <ul>
                    {/* <li>
                        <NavLink to="/products">todos</NavLink>{" "}
                    </li> */}
                    <li>
                        <NavLink to="/products/categoria/media">media</NavLink>{" "}
                    </li>

                    <li>
                        <NavLink to="/products/categoria/polo">polo</NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/products/categoria/camisa">
                            camisa
                        </NavLink>{" "}
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="font-roboto text-xl text-[#ff9b05]">Niños</h1>
                <ul>
                    {/* <li>
                        <NavLink to="/products">todos</NavLink>{" "}
                    </li> */}
                    <li>
                        <NavLink to="/products/categoria/media">media</NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/products/categoria/blusa">blusa</NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/products/categoria/polo">polo</NavLink>{" "}
                    </li>
                    <li>
                        <NavLink to="/products/categoria/camisa">
                            camisa
                        </NavLink>{" "}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ListCategory;
