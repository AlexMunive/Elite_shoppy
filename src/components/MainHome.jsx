import MainImage from "./mainHome/MainImage";
import NewArrivals from "./mainHome/NewArrivals";
import Counter from "./mainHome/Counter";
import Discount from "./mainHome/Discount";
import TopBrands from "./mainHome/TopBrands";
import WhatsTreding from "./mainHome/WhatsTreding";
import Newsletter from "./mainHome/Newsletter";

const MainHome = () => {
    return (
        <div className="flex flex-wrap">
            <MainImage />
            <NewArrivals />
            <div className="flex flex-col">
                <div className="mb-5 mt-5">
                    <h1 className="text-center font-cantarell md:text-2xl">
                        <em className="not-italic text-[#ff9b05]">
                            EXCLUSIVE{" "}
                        </em>
                        PROMOTION
                    </h1>
                </div>
                <div className="flex flex-row flex-wrap  justify-center bg-cover bg-center bg-no-repeat">
                    <Discount />
                    <Counter />
                </div>
                <div>
                    <div className="mb-5 mt-5">
                        <h1 className="text-center font-cantarell md:text-2xl">
                            <em className="not-italic text-[#ff9b05]">
                                WHAT'S{" "}
                            </em>
                            TRENDING
                        </h1>
                    </div>
                    <WhatsTreding />
                </div>
                <TopBrands />
                <Newsletter />
            </div>
        </div>
    );
};

export default MainHome;
