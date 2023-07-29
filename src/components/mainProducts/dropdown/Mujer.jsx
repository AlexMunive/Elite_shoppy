import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Mujer = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className="ml-12 mb-5 md:ml-0 md:mb-0">
                <Menu.Button className="inline-flex w-full  gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Mujeres
                    {/* <ChevronDownIcon
                        className="-mr-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    /> */}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-[170px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <h1 className="font-roboto text-[#ff9b05] font-normal ml-5">
                            Ropa
                        </h1>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-casacas-y-abrigos"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Casacas y Abrigos
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-chompas-y-poleras"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Chompas y Poleras
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-blazers"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Blazers
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-blusas-y-camisas"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05]  text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Blusas y Camisas
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-polos-y-tops"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Polos y Tops
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-pantalones-y-jeans"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Pantalones y Jeans
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-vestidos-y-enterizos"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Vestidos y Enterizos
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-faldas"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Faldas
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-shorts"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Shorts
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-lenceria"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Lencería
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-pijamas"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Pijamas
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-medias-y-pantys"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Medias y Pantys
                                </NavLink>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <h1 className="font-roboto text-[#ff9b05] font-normal ml-4">
                            Zapatos
                        </h1>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-botas-y-botines"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Botas y botines
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-pantuflas"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Pantuflas
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-zapatos-planos"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Zapatos planos
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-zapatillas"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Zapatillas
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-tacos"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Tacos
                                </NavLink>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <h1 className="font-roboto text-[#ff9b05] font-normal ml-4">
                            Accesorios
                        </h1>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-carteras-y-bolsos"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Carteras y bolsos
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-correas"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Correas
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-sombreros-y-gorros"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Sombreros y Gorros
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/products/categoria/mujer-bufandas-y-mitones"
                                    className={classNames(
                                        active
                                            ? "bg-[#ff9b05] text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Bufandas y mitones
                                </NavLink>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Mujer;
