import React from "react";

const Map = () => {
    return (
        <div>
            <h1 className="text-center my-10 font-roboto text-2xl text-[#ff9b05] font-normal">
                VIEW ON MAP
            </h1>
            <div className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.706810654444!2d-77.06488472593696!3d-11.9947776409329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce543477f8d9%3A0x9d64f6794789376b!2sMegaPlaza%20Independencia!5e0!3m2!1ses-419!2spe!4v1685565605797!5m2!1ses-419!2spe"
                    width={"100%"}
                    height={400}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default Map;
