import React from "react";
import newArrival1 from "../../assets/img/new_arrival_1.jpg";
import newArrival2 from "../../assets/img/new_arrival_2.jpg";

const NewArrivals = () => {
    return (
        <div className="mt-14 ">
            <div className="mb-5">
                <h1 className="text-center font-cantarell md:text-2xl">
                    <em className="not-italic text-[#ff9b05]">NEW </em>ARRIVALS
                </h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-8">
                <div className="">
                    <div className="">
                        <h2 className="absolute z-10 ml-[280px] mt-[120px] font-roboto font-light text-white sm:ml-[470px] sm:mt-60 sm:text-3xl ">
                            <em className="not-italic text-[#ff9b05]">F</em>
                            ASHION
                        </h2>
                        <h3 className="absolute z-10 ml-[210px] mt-[145px] font-roboto font-extralight tracking-[0.3em] text-white sm:ml-[430px] sm:mt-[275px] sm:text-lg">
                            New arrivals
                        </h3>
                    </div>

                    <img
                        src={newArrival1}
                        alt="newArrival1"
                        className="w-auto border-2  border-[#ff9b05] p-2 shadow-lg hover:scale-105"
                    />
                </div>
                <div className="">
                    <div className="">
                        <h2 className="absolute z-10 ml-[280px] mt-[120px] font-roboto font-light text-white sm:ml-[470px] sm:mt-60 sm:text-3xl">
                            <em className="not-italic text-[#ff9b05]">F</em>
                            ASHION
                        </h2>
                        <h3 className="absolute z-10 ml-[210px] mt-[145px] font-roboto font-extralight tracking-[0.3em] text-white sm:ml-[430px] sm:mt-[275px] sm:text-lg">
                            New arrivals
                        </h3>
                    </div>
                    <img
                        src={newArrival2}
                        alt="newArrival2"
                        className="w-auto border-2  border-[#ff9b05] p-2 shadow-lg hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
