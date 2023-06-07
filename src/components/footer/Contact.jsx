import React from "react";

const Contact = () => {
    return (
        <div className="m-4">
            <h1 className="w-12 border-b-2 border-[#ff9b05] font-roboto text-lg font-medium">
                CONTACT
            </h1>
            <p className="my-3 font-cantarell text-gray-400">
                We are a fashion company
            </p>
            <div className="flex flex-col gap-2">
                <div className="flex content-center items-center  gap-4">
                    <div className="border-2 border-gray-400 pt-1 px-1 text-gray-400">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <h3 className="font-roboto  text-gray-600">
                        Avenida 1234k, cuadra 4, Perú.
                    </h3>
                </div>
                <div className="flex content-center items-center  gap-4">
                    <div className="border-2 border-gray-400 pt-1 px-1 text-gray-400">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <h3 className="font-roboto  text-gray-600">
                        fashionclub@gmail.com
                    </h3>
                </div>
                <div className="flex content-center items-center  gap-4">
                    <div className="border-2 border-gray-400 pt-1 px-1 text-gray-400">
                        <ion-icon name="call-outline"></ion-icon>
                    </div>
                    <h3 className="font-roboto  text-gray-600">
                        +51 648496864
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;
