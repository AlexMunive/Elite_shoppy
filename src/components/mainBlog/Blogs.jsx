import React from "react";
import blogImg from "../../assets/img/blogImg.jpg";
import blogImg2 from "../../assets/img/blogImg2.jpg";
import blogImg3 from "../../assets/img/blogImg3.jpg";

const Blogs = () => {
    return (
        <div className="flex flex-wrap justify-center content-center items-center">
            <div>
                <h1 className="text-center my-10 font-roboto text-2xl text-[#ff9b05] font-normal">
                    A Simple Blog Post
                </h1>

                <div className="flex flex-wrap justify-center font-cantarell max-w-[1000px]">
                    <h3 className="mb-5 underline decoration-solid text-center">
                        POSTED ON MARCH 08, 2022 BY SAMANTHA BAUCH
                    </h3>

                    <div>
                        <p className="absolute mt-5 ml-5 flex flex-wrap justify-center items-center content-center w-7 border-2 border-[#ff9b05] px-6  text-center">
                            08 Mar
                        </p>

                        <img src={blogImg2} alt="" className="" />
                    </div>

                    <p className="font-cantarell px-2 max-w-[800px]">
                        <i className="bx bxs-quote-alt-left text-[#ff9b05] pr-2"></i>
                        Desde el primer momento, me ayudaron con todos los
                        mínimos detalles respecto al alojamiento, busqueda y
                        modelo de ropa. Estuvieron siempre disponibles y me
                        ayudaron con el mismo entusiasmo de un principio. Por
                        eso no me queda mas que agradecerles. Recomiendo sus
                        servicios al 100%.
                        <i className="bx bxs-quote-alt-right text-[#ff9b05] pl-2"></i>
                    </p>
                    <div className="flex flex-wrap gap-4 my-4">
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#3b61ca] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#3b61ca]">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#51cb5a] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#51cb5a]">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#4dd4e6] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#4dd4e6]">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#4450b6] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#4450b6]">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#be3333] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#be3333]">
                            <ion-icon name="logo-pinterest"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#2c3d8a] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#2c3d8a]]">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center my-10 font-roboto text-2xl text-[#ff9b05] font-normal">
                    JUST ANOTHER POST WITH GALLERY
                </h1>

                <div className="flex flex-wrap justify-center font-cantarell max-w-[1000px]">
                    <h3 className="mb-5 underline decoration-solid text-center">
                        POSTED ON OCTOBER 13, 2015 BY TOMMY VEDVIK
                    </h3>

                    <div>
                        <p className="absolute mt-5 ml-5 flex flex-wrap justify-center items-center content-center w-7 border-2 border-[#ff9b05] px-6  text-center">
                            13 Oct
                        </p>

                        <img src={blogImg} alt="" className="" />
                    </div>

                    <p className="font-cantarell px-2 max-w-[800px]">
                        <i className="bx bxs-quote-alt-left text-[#ff9b05] pr-2"></i>
                        Mi experiencia con los servicios de Elite shoppy fue muy
                        buena, debo destacar la rapidez, iniciativa, compromiso
                        y puntualidad en toda entrega. Su servicio postventa
                        mantiene esa calidad y prontitud en las respuestas.
                        Actualmente compro toda mi ropa en dicha tienda y a
                        medida que vienen promociones aprovecho para comprar
                        mas. Los recomiendo ampliamente.
                        <i className="bx bxs-quote-alt-right text-[#ff9b05] pl-2"></i>
                    </p>
                    <div className="flex flex-wrap gap-4 my-4">
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#3b61ca] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#3b61ca]">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#51cb5a] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#51cb5a]">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#4dd4e6] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#4dd4e6]">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#4450b6] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#4450b6]">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#be3333] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#be3333]">
                            <ion-icon name="logo-pinterest"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#2c3d8a] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#2c3d8a]]">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-center my-10 font-roboto text-2xl text-[#ff9b05] font-normal">
                    A VIDEO BLOG POST
                </h1>

                <div className="flex flex-wrap justify-center font-cantarell max-w-[1000px]">
                    <h3 className="mb-5 underline decoration-solid text-center">
                        POSTED ON JUNE 22, 2023 BY GLENNA REICHERT
                    </h3>

                    <div>
                        <p className="absolute mt-5 ml-5 flex flex-wrap justify-center items-center content-center w-7 border-2 border-[#ff9b05] px-6  text-center">
                            13 Jun
                        </p>

                        <img src={blogImg3} alt="" className="" />
                    </div>

                    <p className="font-cantarell px-2 max-w-[800px]">
                        <i className="bx bxs-quote-alt-left text-[#ff9b05] pr-2"></i>
                        Yo siempre he tenido en cuenta la buena atención,
                        puntualidad y responsabilidad, pero lo que ELITE SHOPPY
                        nos ofrecieron fue más que eso, fue una atención
                        completamente personalizada, muy organizados y sobretodo
                        muy creativos, en todo momento coordinaban con nosotros
                        y nos brindaban asesoramiento para nuestra compra.
                        <i className="bx bxs-quote-alt-right text-[#ff9b05] pl-2"></i>
                    </p>
                    <div className="flex flex-wrap gap-4 my-4">
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#3b61ca] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#3b61ca]">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#51cb5a] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#51cb5a]">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#4dd4e6] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#4dd4e6]">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#4450b6] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#4450b6]">
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#be3333] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#be3333]">
                            <ion-icon name="logo-pinterest"></ion-icon>
                        </div>
                        <div className=" flex m-auto p-[2px] text-3xl hover:text-[#2c3d8a] border-2 border-gray-500 rounded-full text-gray-500 hover:border-[#2c3d8a]]">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
