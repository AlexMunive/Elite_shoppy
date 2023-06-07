import React from "react";
import client from "../../assets/img/client.jpg";

const Description = () => {
    return (
        <div className="flex  flex-row justify-around my-20 flex-wrap px-5 gap-4">
            <div className="flex flex-col gap-5">
                <h1 className="max-w-[500px] font-cantarell">
                    Elite Shoppy's objective is the marketing of clothing and
                    accessories that highlight the beauty of today's women and
                    men, governed by the latest fashion trends for each season
                    (spring-summer and autumn-winter) in clothing, footwear and
                    accessories and more. In our stores you will always find a
                    portfolio of products and services focused on the
                    satisfaction of women who want to feel beautiful, modern and
                    glamorous on all occasions.
                </h1>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row max-w-[500px] gap-5">
                        <div className="text-[#ff9b05] text-5xl p-5">
                            <ion-icon name="storefront-outline"></ion-icon>
                        </div>
                        <h2 className=" font-cantarell">
                            We have more than 50 stores around the world, more
                            than 30 stores throughout Latin America, with unique
                            discounts for each season to look unique in current
                            fashion.
                        </h2>
                    </div>
                    <div className="flex flex-row max-w-[500px] gap-5">
                        <div className="text-[#ff9b05] text-5xl p-5">
                            <ion-icon name="shirt-outline"></ion-icon>
                        </div>
                        <h2 className=" font-cantarell">
                            We have super promotions in accessories, summer and
                            winter clothing for all customer tastes and with
                            exclusive offers. We have a variety of colors and
                            styles.
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                <img src={client} alt="" />
            </div>
        </div>
    );
};

export default Description;
