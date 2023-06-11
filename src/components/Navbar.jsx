import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    let Links = [
        { name: "HOME", link: "/" },
        { name: "PRODUCTOS", link: "/products" },
        { name: "ABOUT US", link: "/about" },
        { name: "BLOG'S", link: "/blog" },
        { name: "MAIL US", link: "/mail" },
    ];

    return (
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
                            className="md:my-0 md:ml-8 md:text-lg my-4 font-roboto text-sm font-light focus:text-[#ff9b05]"
                        >
                            <NavLink
                                to={link.link}
                                className="duration-200 focus:text-[#ff9b05] bg-white "
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
