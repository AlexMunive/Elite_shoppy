import React from "react";
import locationImg from "../../assets/img/locationImg.jpg";
import locationImg2 from "../../assets/img/locationImg2.jpg";
import locationImg3 from "../../assets/img/locationImg3.jpg";

const Information = () => {
    return (
        <div className="my-16 flex flex-row gap-10 flex-wrap justify-center">
            <div className="flex justify-between items-center content-center flex-wrap flex-col drop-shadow-2xl ">
                <div className="absolute text-5xl text-white mt-[40px]">
                    <ion-icon name="location-outline"></ion-icon>
                </div>
                <h1 className="absolute text-[#ff9b05]  text-2xl font-roboto text-center mt-[90px]">
                    Address
                </h1>
                <p className="absolute  text-xl text-white text-center px-5 max-w-[380px] mt-[130px]">
                    12K Street, 45 Building Road New York City.
                </p>
                <img
                    src={locationImg}
                    alt=""
                    className="max-h-[230px] min-w-[380px]"
                />
            </div>
            <div className="flex justify-between items-center content-center flex-wrap flex-col drop-shadow-2xl ">
                <div className="absolute text-5xl text-white mt-[40px]">
                    <ion-icon name="call-outline"></ion-icon>
                </div>
                <h1 className="absolute text-[#ff9b05]  text-2xl font-roboto text-center mt-[90px]">
                    Call Us
                </h1>
                <p className="absolute  text-xl text-white text-center px-5 max-w-[380px] mt-[130px]">
                    +1234 758 839
                </p>
                <img
                    src={locationImg2}
                    alt=""
                    className="max-h-[230px] min-w-[380px]"
                />
            </div>
            <div className="flex justify-between items-center content-center flex-wrap flex-col drop-shadow-2xl max-w-[380px]">
                <div className="absolute text-5xl text-white mt-[40px]">
                    <ion-icon name="mail-outline"></ion-icon>
                </div>
                <h1 className="absolute text-[#ff9b05]  text-2xl font-roboto text-center mt-[90px]">
                    Email
                </h1>
                <p className="absolute  text-xl text-white text-center px-5 max-w-[380px] mt-[130px]">
                    fashionclub@gmail.com
                </p>
                <img
                    src={locationImg3}
                    alt=""
                    className="min-h-[230px] min-w-[380px]"
                />
            </div>
        </div>
    );
};

export default Information;
