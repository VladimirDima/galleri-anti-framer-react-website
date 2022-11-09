import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import HorizontalScroll from "react-scroll-horizontal";

const transition = { duration: 1, ease: [.6, .01, -0.05, 0.9] }

const title = {
    initial: {
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            staggerChildren: .04,
            staggerDirection: -1
        }
    },
    exit: {
        opacity: 0
    }
}

const letter = {
    initial: {
        y: 100
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition }
    }
}

const importAll = (r) => {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../assets/images/blood', false, /\.jpeg/));

const blood = () => {
    return (
        <div className="bg-right bg-cover">
            <div className="container pt-16 px-6 mx-auto flex flex-wrap justify-center flex-col md:flex-row items-center" style={{ maxWidth: "67rem" }}>
                <HorizontalScroll className="conti" style={{ height: "initial" }}>
                    <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden" style={{ maxWidth: "30rem" }}>
                        <motion.h1 initial="initial" animate="animate" exit={{ opacity: 0 }} variants={title} className="text-7xl flex font-bold uppercase ">
                            <motion.div className="blood-font" variants={letter}>B</motion.div>
                            <motion.div className="blood-font" variants={letter}>L</motion.div>
                            <motion.div className="blood-font" variants={letter}>O</motion.div>
                            <motion.div className="blood-font" variants={letter}>O</motion.div>
                            <motion.div className="blood-font" variants={letter}>D</motion.div>
                        </motion.h1>
                        <div className="overflow-hidden mt-4">
                            <motion.div initial={{ y: 250 }} animate={{ y: 0 }} exit={{ y: 250 }} transition={transition}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <Link to="/">
                                    <div className="flex bg-black hover:bg-gray-700 mt-7 w-20 text-white font-light py-2 pl-2 pr-3 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                        <div>back</div>
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-full  xl:w-1/2 h-auto py-6 flex relative ">
                        <div className="flex">
                            <motion.div className="overflow-hidden"
                                initial="initial"
                                animate={{ width: 300 }}
                                exit={{ width: 512 }}
                                transition={transition}
                            >
                                <motion.img className="max-w-lg" src={images['thatscool.jpeg']} alt=""
                                    initial="initial"
                                    animate={{ scale: 1.3 }}
                                    exit={{ scale: 1 }}
                                    transition={transition}
                                />
                            </motion.div>

                            <motion.img className="max-w-lg ml-6" src={images['trod.jpeg']} alt=""
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={transition} />
                            { }
                            <img className="max-w-lg ml-6" src={images['3dpainting.jpeg']} />
                            <img className="max-w-lg ml-6" src={images['bondage.jpeg']} />
                            <img className="max-w-lg ml-6" src={images['dog-painting.jpeg']} />
                            <img className="max-w-lg ml-6" src={images['people.jpeg']} />
                            <img className="max-w-lg ml-6" src={images['text.jpeg']} />
                            <img className="max-w-lg ml-6" src={images['trod.jpeg']} />
                        </div>
                    </div>
                </HorizontalScroll>
            </div>
        </div >
    );
}

export default blood;