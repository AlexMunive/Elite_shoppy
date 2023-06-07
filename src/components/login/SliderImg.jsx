import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    {
        url: "https://p.w3layouts.com/demos/apr-2016/05-04-2016/smart_shop/web/images/ba1.jpg",
    },
    {
        url: "https://p.w3layouts.com/demos/apr-2016/05-04-2016/smart_shop/web/images/ba2.jpg",
    },
    {
        url: "https://p.w3layouts.com/demos/apr-2016/05-04-2016/smart_shop/web/images/ba3.jpg",
    },
    {
        url: "https://p.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/banner3.jpg",
    },
    {
        url: "https://p.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/ab_pic.jpg",
    },
];

const SliderImg = () => {
    return (
        <div>
            <SimpleImageSlider
                width={700}
                height={"100vh"}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
        </div>
    );
};

export default SliderImg;
