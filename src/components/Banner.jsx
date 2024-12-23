import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Lottie from "lottie-react";
import sliderImg from '../assets/animaiton/banner.json'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
    const motionFadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    }

    return (
        <div className="relative">
            <Swiper
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="swiper"
            >

                <SwiperSlide>
                    <div className="relative w-full h-[500px] font-bodyFont">
                        <Lottie animationData={sliderImg} className="w-full h-full object-cover"></Lottie>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-transparent to-teal-800"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                            <motion.h1
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"
                                className="text-5xl font-bold mb-4 text-teal-950">
                                Unlock Your Potential with <span className="text-6xl text-teal-800">Task Buddy</span>
                            </motion.h1>
                            <motion.p
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                                className="text-lg mb-6 text-teal-950">
                                Giving you access to state of the art digital learning resources.
                            </motion.p>
                            <motion.button
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.8 }}
                                className="px-6 py-3 bg-white text-teal-800 font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
                                <Link to="/signin">Learn More</Link>
                            </motion.button>
                        </div>
                    </div>
                </SwiperSlide> 


                <SwiperSlide>
                    <div className="relative w-full h-[500px]">
                        <img
                            src="https://i.ibb.co.com/H7mRptk/2148203776.jpg"
                            alt="Slide 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-transparent to-pink-600"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <motion.h1
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"

                                className="text-5xl font-bold mb-4 text-orange-900">
                                Innovative Solutions for a Bright Future
                            </motion.h1>
                            <motion.p
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                                className="text-lg mb-6 text-orange-800">
                                Transforming education through technology and creativity.
                            </motion.p>
                            <motion.button
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.8 }}
                                className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
                                <Link to="/signin">Get Started</Link>
                            </motion.button>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className="relative w-full h-[500px]">
                        <img
                            src="https://i.ibb.co.com/PQYqBjC/2148756604.jpg"
                            alt="Slide 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-transparent to-yellow-600"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <motion.h1
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"

                                className="text-5xl font-bold mb-4 text-yellow-400">
                                Experience the Future of Learning
                            </motion.h1>
                            <motion.p
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.4 }}
                                className="text-lg mb-6 text-yellow-300">
                                Join us in revolutionizing how knowledge is shared.
                            </motion.p>
                            <motion.button
                                variants={motionFadeIn}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.8 }}
                                className="px-6 py-3 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-200 transition duration-300">
                               <Link to="/signin"> Explore Now</Link>
                            </motion.button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;