import React from "react";
import MainImage from "./mainAbout/MainImage";
import Description from "./mainAbout/Description";
import Newsletter from "./mainHome/Newsletter";
import MeetOurTeam from "./mainAbout/MeetOurTeam";
import Offer from "./mainAbout/Offer";

const MainAbout = () => {
    return (
        <div>
            <MainImage />
            <Description />
            <MeetOurTeam />
            <Offer />
            <Newsletter />
        </div>
    );
};

export default MainAbout;
