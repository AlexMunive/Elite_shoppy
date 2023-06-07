import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
    return (
        <div className="flex gap-5 flex-wrap">
            {data.map((producto) => (
                <Item key={producto.id} info={producto} />
            ))}
        </div>
    );
};

export default ItemList;
