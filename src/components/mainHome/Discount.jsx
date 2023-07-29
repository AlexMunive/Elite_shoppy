import React from "react";
import discountLogo from "../../assets/img/discount.jpg";

const Discount = () => {
    return (
        <div className="mt-5">
            <h2 className="absolute ml-[180px] mt-[30px] font-cantarell text-xs font-extralight sm:ml-[350px] sm:text-xl">
                Grand Opening Event With Flat
            </h2>
            <h2 className="absolute ml-[250px] mt-[50px] font-cantarell text-xs font-extralight sm:ml-[450px] sm:mt-[80px] sm:text-xl">
                <em className="not-italic text-[#ff9b05]">20% </em>
                Discount
            </h2>
            <p className="absolute ml-[250px] mt-[80px] font-cantarell text-xs font-extralight text-[#ff9b05] hover:text-black sm:ml-[450px] sm:mt-[140px] sm:text-xl">
                SHOP NOW <ion-icon name="arrow-forward-outline"></ion-icon>
            </p>
            <img src={discountLogo} alt="" className=" h-full w-[760px]" />
        </div>
    );
};

export default Discount;
