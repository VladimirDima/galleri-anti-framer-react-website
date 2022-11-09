import { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import needForStreet from '../assets/images/needForStreet/banner.jpeg';
import mock from '../assets/images/mock.jpeg';
import blood from '../assets/images/blood/thatscool.jpeg';

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
        <div className="bg-right bg-cover">
            <div className="container pt-16 px-6 mx-auto justify-center flex flex-wrap flex-col md:flex-row items-center" style={{ maxWidth: "67rem" }}>
                <div className="flex w-full">
                    <div className="flex flex-col w-full xl:w-1/2 justify-center lg:items-start overflow-y-hidden" style={{ maxWidth: "30rem" }}>
                        <motion.ul className="flex flex-col w-full justify-center items-start text-center md:text-left gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <h4 className="text-2xl font-light"> past exhibitions</h4>
                            <motion.li
                                whileHover={{ skewY: 3 }}
                                onMouseEnter={() => setHovered(needForStreet)}
                                transition={hoverTransition} >
                                <Link className="nfs-font-hover text-5xl font-bold pl-8 uppercase" to="/needForStreet" >Need For Street</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ skewY: 3 }}
                                onMouseEnter={() => setHovered(mock)}
                                transition={hoverTransition}>
                                <Link className="plastic-font-hover text-5xl font-bold pl-8 uppercase" to="/exhibition" >Plastic</Link>
                            </motion.li>
                            <motion.li
                                whileHover={{ skewY: 3 }}
                                onMouseEnter={() => setHovered(blood)}
                                transition={hoverTransition}>
                                <Link className="blood-font-hover text-5xl font-bold pl-8 uppercase" to="/blood">Blood</Link>
                            </motion.li>
                            <h4 className="text-2xl font-light mt-5"> about us</h4>
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