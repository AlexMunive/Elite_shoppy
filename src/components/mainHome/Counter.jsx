import React, { useEffect, useRef, useState } from "react";
import fondoCount from "../../assets/img/fondo_count.jpg";

const Counter = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date("June 22, 2023 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    return (
        <div className="mt-5">
            <h2 className="absolute ml-[150px] mt-[30px] w-[100px] border-2 border-[#ff9b05] bg-gray-900 p-1 font-cantarell text-white sm:ml-[200px] sm:mt-[60px]">
                HOT DEAL
            </h2>
            <div className="absolute ml-[40px] mt-[100px] inline-block h-16 w-16 rounded-full border-2 border-[#ff9b05] bg-[#ff9b05] text-center sm:ml-[80px] sm:mt-[150px]">
                <p className="mt-2  text-white">{timerDays}</p>
                <p className="font-cantarell text-xs  text-white">days</p>
            </div>
            <div className="absolute ml-[120px] mt-[100px] inline-block h-16 w-16 rounded-full border-2 border-[#ff9b05] bg-[#ff9b05] text-center sm:ml-[160px] sm:mt-[150px]">
                <p className="mt-2  text-white">{timerHours}</p>
                <p className="font-cantarell text-xs  text-white">hours</p>
            </div>
            <div className="absolute ml-[200px] mt-[100px] inline-block h-16 w-16 rounded-full border-2 border-[#ff9b05] bg-[#ff9b05] text-center sm:ml-[240px] sm:mt-[150px]">
                <p className="mt-2  text-white">{timerMinutes}</p>
                <p className="font-cantarell text-xs  text-white">minutes</p>
            </div>
            <div className="absolute ml-[280px] mt-[100px] inline-block h-16 w-16 rounded-full border-2 border-[#ff9b05] bg-[#ff9b05] text-center sm:ml-[320px] sm:mt-[150px]">
                <p className="mt-2  text-white">{timerSeconds}</p>
                <p className="font-cantarell text-xs text-white">seconds</p>
            </div>
            <img src={fondoCount} alt="" className="" />
        </div>
    );
};

export default Counter;
