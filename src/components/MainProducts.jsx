import React from "react";
import MainImage from "./mainProducts/MainImage";
import Newsletter from "./mainHome/Newsletter";
import ItemListContainer from "./mainProducts/ItemListContainer";
import ListCategory from "./mainProducts/ListCategory";
import Soon from "./mainProducts/Soon";

const MainProducts = () => {
    return (
        <div>
            <MainImage />
            <div className="flex my-10 flex-col md:flex-row">
                <ListCategory />
                <ItemListContainer />
            </div>
            <Soon />

            <Newsletter />
        </div>
    );
};

export default MainProducts;
