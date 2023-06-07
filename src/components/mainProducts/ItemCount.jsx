import React from "react";
import { useState } from "react";
import RequiredAuth from "../RequiredAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ItemCount = ({ initial, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const handleClickDisminur = () => {
        setCount(count - 1);
    };
    const handleClickAumentar = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    const handleOnAdd = () => {
        onAdd(count);
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: "success",
            title: "agregado correctamente",
        });
        // alert("agregado al carrito");
        // <Alert severity="info">agregado correctamente!</Alert>;
    };

    return (
        <div>
            <div className="flex items-center content-center  border-[#ff9b05] ">
                <button
                    disabled={count <= 0}
                    onClick={handleClickDisminur}
                    className="bg-[#ff9b05] text-white px-4 text-center pb-[2px]"
                >
                    -
                </button>
                <span className="px-4 border-2 ">{count}</span>
                <button
                    onClick={handleClickAumentar}
                    className="bg-[#ff9b05] text-white px-4 text-center pb-[2px]"
                >
                    +
                </button>
            </div>
            <div>
                <RequiredAuth>
                    <button
                        onClick={handleOnAdd}
                        className="bg-black mt-2 w-[125px] text-white py-2 hover:scale-105"
                    >
                        <i className="bx bx-shopping-bag pr-1"></i>Agregar
                    </button>
                </RequiredAuth>
            </div>
        </div>
    );
};

export default ItemCount;
