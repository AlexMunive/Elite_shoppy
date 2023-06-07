import React from "react";
import { NavLink } from "react-router-dom";

const ListCategory = () => {
    return (
        <div className="flex flex-col">
            <h1 className="font-roboto text-2xl">Categorias</h1>
            <NavLink to="/products">todos</NavLink>{" "}
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
