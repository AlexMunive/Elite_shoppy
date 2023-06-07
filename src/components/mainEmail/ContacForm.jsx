import React from "react";

const ContacForm = () => {
    return (
        <div className="flex flex-wrap flex-col justify-center items-center  content-center">
            <h1 className="text-center my-10 font-roboto text-2xl text-[#ff9b05] font-normal">
                CONTACT FORM
            </h1>
            <form className="flex flex-col w-[60%] ">
                <div className="flex flex-row gap-3 my-3 flex-wrap sm:flex-nowrap">
                    <div className="w-full">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            className="rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05] w-full "
                            placeholder="your name"
                        />
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="text"
                            className="rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05] w-full "
                            placeholder="your email"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#ff9b05] focus:border-[#ff9b05]  "
                        placeholder="Write your thoughts here..."
                    ></textarea>
                </div>
                <button
                    className="focus:outline-none text-white bg-[#ff9b05] hover:bg-[#ff9b05]  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-[100px] mt-4"
                    type="submit"
                >
                    SIGN IN
                </button>
            </form>
        </div>
    );
};

export default ContacForm;
