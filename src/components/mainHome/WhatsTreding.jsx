import React from "react";
import WhatsTreding1 from "../../assets/img/WhatsTreding1.jpg";
import WhatsTreding2 from "../../assets/img/WhatsTreding2.jpg";
import WhatsTreding3 from "../../assets/img/WhatsTreding3.jpg";

const WhatsTreding = () => {
    return (
        <div className="flex flex-row flex-wrap content-center items-center justify-center">
            <div className="m-4 border-4  border-[#ff9b05] ">
                <div className="">
                    <h2 className="absolute z-10 ml-[30px] mt-[30px] font-roboto text-2xl font-light text-black sm:ml-[40px] sm:mt-[30px] sm:text-3xl sm:font-normal sm:text-white">
                        <em className="not-italic text-[#ff9b05]">S</em>
                        ALE
                    </h2>
                    <h3 className="absolute z-10 ml-[30px] mt-[60px] font-roboto font-normal tracking-[0.3em] text-black sm:ml-[40px] sm:mt-[70px] sm:text-3xl  sm:text-white">
                        Upto 55%
                    </h3>
                </div>
                <img src={WhatsTreding1} alt="" className="hover:scale-105" />
            </div>
            <div className="flex flex-col items-center justify-between">
                <div className="m-4 border-4  border-[#ff9b05] ">
                    <div className="">
                        <h2 className="absolute z-10 ml-[30px] mt-[40px] font-roboto text-2xl font-light text-black sm:ml-[540px] sm:mt-[30px] sm:text-3xl sm:font-normal  sm:text-white">
                            <em className="not-italic text-[#ff9b05]">S</em>
                            ALE
                        </h2>
                        <h3 className="absolute z-10 ml-[30px] mt-[75px] font-roboto font-normal tracking-[0.3em] text-black sm:ml-[420px] sm:mt-[70px] sm:text-3xl  sm:text-white">
                            Upto 65%
                        </h3>
                    </div>
                    <img
                        src={WhatsTreding2}
                        alt=""
                        className="hover:scale-105"
                    />
                </div>
                <div className="m-4 border-4  border-[#ff9b05]">
                    <div className="">
                        <h2 className="absolute z-10 ml-[30px] mt-[40px] font-roboto text-2xl font-light text-black sm:ml-[540px] sm:mt-[30px] sm:text-3xl sm:font-normal  sm:text-white">
                            <em className="not-italic text-[#ff9b05]">S</em>
                            ALE
                        </h2>
                        <h3 className="absolute z-10 ml-[30px] mt-[75px] font-roboto font-normal tracking-[0.3em] text-black sm:ml-[420px] sm:mt-[70px] sm:text-3xl  sm:text-white">
                            Upto 45%
                        </h3>
                    </div>
                    <img
                        src={WhatsTreding3}
                        alt=""
                        className="hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatsTreding;
