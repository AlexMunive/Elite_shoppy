import React from "react";

const Information = () => {
    return (
        <div className="m-4">
            <h1 className="w-12 border-b-2 border-[#ff9b05] font-roboto text-lg font-medium">
                INFORMATION
            </h1>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">About Us</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Contact Us</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Short Codes</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">FAQ's</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Special Products</h3>
            </div>
        </div>
    );
};

export default Information;
