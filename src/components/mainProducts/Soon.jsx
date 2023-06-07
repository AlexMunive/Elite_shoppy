import React from "react";
import Slider from "react-slick";
import proximamente1 from "../../assets/img/proximamente1-logo.png";
import proximamente2 from "../../assets/img/proximamente2-logo.png";
import proximamente3 from "../../assets/img/proximamente3-logo.png";
import proximamente4 from "../../assets/img/proximamente4-logo.png";
import proximamente5 from "../../assets/img/proximamente5-logo.png";
import proximamente6 from "../../assets/img/proximamente6-logo.png";
// import logoproximamente from "../../assets/img/";
const Soon = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };
    return (
        <div>
            <div className="mb-5">
                <h1 className="text-center font-cantarell md:text-2xl">
                    <em className="not-italic text-[#ff9b05]">UPCOMING </em>
                    RELEASES
                </h1>
            </div>
            <Slider {...settings}>
                <div className="px-2">
                    <img
                        className="max-h-[450px] shadow-md hover:scale-105"
                        src={proximamente1}
                        alt=""
                    />
                </div>
                <div className="px-2">
                    <img
                        className="max-h-[450px] shadow-md hover:scale-105"
                        src={proximamente2}
                        alt=""
                    />
                </div>
                <div className="px-2">
                    <img
                        className="max-h-[450px] shadow-md hover:scale-105"
                        src={proximamente3}
                        alt=""
                    />
                </div>
                <div className="px-2">
                    <img
                        className="max-h-[450px] shadow-md hover:scale-105"
                        src={proximamente4}
                        alt=""
                    />
                </div>
                <div className="px-2">
                    <img
                        className="max-h-[450px] shadow-md hover:scale-105"
                        src={proximamente5}
                        alt=""
                    />
                </div>
                <div className="px-2">
                    <img
                        className="max-h-[450px] shadow-md hover:scale-105"
                        src={proximamente6}
                        alt=""
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Soon;
