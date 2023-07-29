import React from "react";
import Item from "./Item";
import { useState } from "react";

const ItemList = ({ data }) => {
    const [page, setPage] = useState(0);

    // paginación

    const maxItem = 8;
    const totalItems = data?.length;
    const maxPage = Math.ceil(totalItems / maxItem);

    //creamos dos funciones para aumentar y disminuir las paginas, no los items
    const onNextPage = () => {
        setPage((page + 1) % maxPage);
    };
    const onPrevPage = () => {
        setPage((page - 1) % maxPage);
    };
    return (
        <div>
            <div className="flex gap-5 flex-wrap md:justify-between justify-center">
                {data
                    ?.slice(page * maxItem, maxItem * (page + 1))
                    .map((producto) => (
                        <Item key={producto.id} info={producto} />
                    ))}
            </div>

            <div className="flex justify-center my-10  place-items-center">
                <button
                    className="bg-[#ff9b05] text-white px-4 py-2 rounded-md mr-2"
                    onClick={onPrevPage}
                    disabled={
                        // si page viene en 0 lo desactivamos
                        !page
                    }
                >
                    &#60;
                </button>
                <p>
                    {page + 1} de {maxPage}
                </p>
                <button
                    className="bg-[#ff9b05] text-white px-4 py-2 rounded-md ml-2"
                    onClick={onNextPage}
                    disabled={
                        // si page es igual al ultimo se desactiva el boton
                        page === Math.ceil(totalItems / maxItem) - 1
                    }
                >
                    &#62;
                </button>
            </div>
        </div>
    );
};

export default ItemList;
