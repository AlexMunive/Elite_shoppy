import React from "react";

const Newsletter = () => {
    return (
        <div className="my-10 flex flex-row flex-wrap content-center items-center justify-center bg-[#ECECEC] py-5 sm:justify-around">
            <div className="flex flex-col flex-wrap items-center justify-center sm:items-start">
                <h3 className="mt-3  font-cantarell text-xl  font-extralight sm:mt-0">
                    Newsletter
                </h3>
                <p className=" font-cantarell text-base text-gray-800">
                    We send you all the necessary information.
                </p>
            </div>
            <div className=" text-center">
                <form action="" className="">
                    {" "}
                    <input
                        type="email"
                        placeholder="Email"
                        className=" mb-4 ml-4 mr-0 mt-4 w-60 p-2 text-gray-400 outline-none sm:w-[400px] focus:border-[#ff9b05] focus:ring-[#ff9b05]"
                    />
                    <button className="bg-[#ff9b05] p-2 font-cantarell text-base text-white ">
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
