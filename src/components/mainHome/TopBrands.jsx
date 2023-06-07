import React from "react";

import Marquee from "react-fast-marquee";
import img1 from "../../assets/img/marca1.png";
import img2 from "../../assets/img/marca2.png";
import img3 from "../../assets/img/marca3.png";
import img4 from "../../assets/img/marca4.png";
import img5 from "../../assets/img/marca5.png";
import img6 from "../../assets/img/marca6.png";
import img7 from "../../assets/img/marca7.jpg";
import img8 from "../../assets/img/marca8.png";

const TopBrands = () => {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center font-cantarell md:text-2xl">
                    <em className="not-italic text-[#ff9b05]">TOP </em>BRANDS
                </h1>
            </div>
            <div className="flex gap-2 flex-wrap">
                <Marquee direction="right" speed={50} delay={1}>
                    <div className="px-2">
                        <img src={img1} alt="" />
                    </div>
                    <div className="px-2">
                        <img src={img2} alt="" />
                    </div>
                    <div className="px-2">
                        <img src={img3} alt="" />
                    </div>
                    <div className="px-2">
                        <img src={img4} alt="" />
                    </div>
                    <div className="px-2">
                        <img src={img5} alt="" />
                    </div>
                    <div className="px-2">
                        <img src={img6} alt="" />
                    </div>
                    <div className=" px-2">
                        <img src={img7} alt="" />
                    </div>
                    <div className="px-2">
                        <img src={img8} alt="" className="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;
