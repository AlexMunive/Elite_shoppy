import React from "react";
import MainImg from "./mainBlog/MainImg";
import Newsletter from "./mainHome/Newsletter";
import Blogs from "./mainBlog/Blogs";

const MainBlog = () => {
    return (
        <div>
            <MainImg />
            <Blogs />
            <Newsletter />
        </div>
    );
};

export default MainBlog;
