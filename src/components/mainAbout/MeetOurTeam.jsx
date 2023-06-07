import React from "react";
import team1 from "../../assets/img/team1.png";
import team2 from "../../assets/img/team2.png";
import team3 from "../../assets/img/team3.png";
import team4 from "../../assets/img/team4.png";

const MeetOurTeam = () => {
    return (
        <div className="flex flex-col  bg-gray-100 py-10">
            <h1 className="text-center font-cantarell md:text-2xl pb-10">
                <em className="not-italic text-[#ff9b05]">MEET </em>OUR TEAM
            </h1>
            <div className="flex flex-wrap flex-row items-center justify-around">
                <div className="flex flex-col">
                    <div>
                        <img
                            src={team1}
                            alt=""
                            className="rounded-full border-4 border-white shadow-xl"
                        />
                    </div>
                    <h2 className="font-cantarell text-xl text-[#ff9b05] text-center my-3">
                        Smith Allen
                    </h2>
                    <h3 className="font-cantarell text-sm text-center">
                        Fashion Designer
                    </h3>
                    <div className="text-center flex gap-3 justify-center my-4 text-gray-800 cursor-pointer">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <img
                            src={team2}
                            alt=""
                            className="rounded-full border-4 border-white shadow-xl"
                        />
                    </div>
                    <h2 className="font-cantarell text-xl text-[#ff9b05] text-center my-3">
                        Laura James
                    </h2>
                    <h3 className="font-cantarell text-sm text-center">
                        Marketing
                    </h3>
                    <div className="text-center flex gap-3 justify-center my-4 text-gray-800 cursor-pointer">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <img
                            src={team3}
                            alt=""
                            className="rounded-full border-4 border-white shadow-xl"
                        />
                    </div>
                    <h2 className="font-cantarell text-xl text-[#ff9b05] text-center my-3">
                        Crisp Doe
                    </h2>
                    <h3 className="font-cantarell text-sm text-center">
                        Fashion Designer
                    </h3>
                    <div className="text-center flex gap-3 justify-center my-4 text-gray-800 cursor-pointer">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <img
                            src={team4}
                            alt=""
                            className="rounded-full border-4 border-white shadow-xl"
                        />
                    </div>
                    <h2 className="font-cantarell text-xl text-[#ff9b05] text-center my-3">
                        Linda Rosy
                    </h2>
                    <h3 className="font-cantarell text-sm text-center">
                        General Manager
                    </h3>
                    <div className="text-center flex gap-3 justify-center my-4 text-gray-800 cursor-pointer">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-twitter"></ion-icon>
                        <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                </div>
            </div>
            <h3 className="text-center text-gray-600 font-cantarell my-5 text-base px-2">
                "We are a very committed, responsible, united, caring team, who
                break barriers to achieve success."
            </h3>
        </div>
    );
};

export default MeetOurTeam;
