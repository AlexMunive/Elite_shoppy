import React from "react";
import MainImage from "./mainEmail/MainImage";
import Information from "./mainEmail/Information";
import Newsletter from "./mainHome/Newsletter";
import Map from "./mainEmail/Map";
import ContacForm from "./mainEmail/ContacForm";

const MainEmail = () => {
    return (
        <div>
            <MainImage />
            <Information />
            <ContacForm />
            <Map />
            <Newsletter />
        </div>
    );
};

export default MainEmail;
