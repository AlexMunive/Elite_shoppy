import React from "react";

const Category = () => {
    return (
        <div className="m-4">
            <h1 className="w-12 border-b-2 border-[#ff9b05] font-roboto text-lg font-medium">
                CATEGORY
            </h1>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Dresses</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Sweaters</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Shirts</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Sarees</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Shorts & Skirts</h3>
            </div>
        </div>
    );
};

export default Category;
