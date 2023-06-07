import React from "react";
import { Carousel } from "react-carousel-minimal";

const MainImage = () => {
    const data = [
        {
            image: "https://p.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner4.jpg",
            caption: "FOOTWEAR",
        },
        {
            image: "https://p.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner5.jpg",
            caption: "ACCESSSORY",
        },
        {
            image: "https://p.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner2.jpg",
            caption: "SUIT",
        },
        {
            image: "https://p.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner1.jpg",
            caption: "SHOPPING",
        },
        {
            image: "https://p.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner3.jpg",
            caption: "WALLETS",
        },
    ];

    const captionStyle = {
        fontSize: "30px",
        fontWeight: 600,
        color: "#ff9b05",
        // fontStyle: "italic",
        fontFamily: "cantarell",
        textShadow: "none",
    };

    // const slideNumberStyle = {
    //     fontSize: "20px",
    //     fontWeight: "bold",
    // };
    return (
        <div className="w-screen">
            <div style={{ textAlign: "center" }}>
                <div
                    style={{
                        padding: "0 0px",
                    }}
                >
                    <Carousel
                        data={data}
                        automatic={true}
                        time={3500}
                        width="1270px"
                        height="550px"
                        // captionStyle={captionStyle}
                        // radius="10px"
                        // slideNumber={true}
                        // slideNumberStyle={slideNumberStyle}
                        // captionPosition="top"
                        dots={true}
                        // pauseIconColor="white"
                        pauseIconSize="none"
                        slideBackgroundColor="black"
                        slideImageFit="cover"
                        // thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "1270px",
                            maxHeight: "auto",
                            // margin: "40px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainImage;
