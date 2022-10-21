import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import needForStreet from '../assets/images/needForStreet/banner.jpeg';
import mock from '../assets/images/mock.jpeg';
import blood from '../assets/images/blood/thatscool.jpeg'

const hoverTransition = { duration: 0.5, ease: [.6, .01, -0.05, 0.9] }

const Home = () => {
    const [isHovered, setHovered] = useState();

    useLayoutEffect(() => {
        setHovered(window.localStorage.getItem('isHovered'));
    }, []);

    useLayoutEffect(() => {
        window.localStorage.setItem('isHovered', isHovered);
    }, [isHovered]);
    
    return (
        <div className="h-screen pb-14 bg-right bg-cover">
            <div className="w-full container mx-auto p-6">
                <div className="w-full flex items-center justify-between">
                    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                        <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">galleri anti<span className="text-indigo-600">.</span></span>
                    </a>
                    <div className="flex w-1/2 justify-end content-center">
                        <a className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4" data-tippy-content="@twitter_handle" href="https://twitter.com/intent/tweet?url=#">
                            <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path></svg>
                        </a>
                        <a className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 " data-tippy-content="#facebook_id" href="https://www.facebook.com/sharer/sharer.php?u=#">
                            <svg className="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container pt-16 px-6 mx-auto justify-center flex flex-wrap flex-col md:flex-row items-center" style={{ maxWidth: "67rem" }}>
                <div className="flex w-full">
                    <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden" style={{ maxWidth: "30rem" }}>
                        <motion.ul className="flex flex-col w-full justify-center items-start text-center md:text-left gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <h4 className="text-2xl font-light"> Past exhibitions</h4>
                            <motion.li
                                whileHover={{ skewY: 3 }}
                                onMouseEnter={() => setHovered(needForStreet)}
                                transition={hoverTransition} >
                                <Link className="text-5xl font-bold pl-8 uppercase" to="/needForStreet" >Need For Street</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ skewY: 3 }}
                                onMouseEnter={() => setHovered(mock)}
                                transition={hoverTransition}>
                                <Link className="text-5xl font-bold pl-8 uppercase" to="/exhibition" >Plastic</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ skewY: 3 }}
                                onMouseEnter={() => setHovered(blood)}
                                transition={hoverTransition}>
                                <Link className="text-5xl font-bold pl-8 uppercase" to="/blood">Blood</Link>
                            </motion.li>
                            <h4 className="text-2xl font-light mt-5"> About us</h4>
                            <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                <Link className="text-5xl font-bold pl-8 uppercase" to="/exhibition" >Our manifesto</Link>
                            </motion.li>
                            <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                <Link className="text-5xl font-bold pl-8 uppercase" to="/contact">Contact</Link>
                            </motion.li>
                        </motion.ul>
                    </div>

                    <div className="w-full xl:w-1/2 py-6">
                        <div className="overflow-hidden" style={{ height: "592px" }}>
                            <motion.img className="morph max-w-lg" src={isHovered} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;