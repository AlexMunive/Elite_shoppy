import React from "react";

const Profile = () => {
    return (
        <div className="m-4">
            <h1 className="w-12 border-b-2 border-[#ff9b05] font-roboto text-lg font-medium">
                PROFILE
            </h1>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">Summer Store</h3>
            </div>
            <div className="my-4 flex content-center items-center gap-2">
                <i className="fa-solid fa-arrow-right  text-gray-600"></i>
                <h3 className="font-roboto  text-gray-600">My Cart</h3>
            </div>
            <h2 className="mb-5 font-roboto text-lg font-medium text-[#ff9b05]">
                Follow Us
            </h2>
            <div className="flex gap-4">
                <i className="fa-brands fa-facebook text-2xl text-gray-800"></i>
                <i className="fa-brands fa-twitter text-2xl text-gray-800"></i>
                <i className="fa-brands fa-google text-2xl text-gray-800"></i>
                <i className="fa-brands fa-square-instagram text-2xl text-gray-800"></i>
            </div>
        </div>
    );
};

export default Profile;
