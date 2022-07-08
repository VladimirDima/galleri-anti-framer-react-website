import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import mock from '../assets/mock.jpeg';

const transition = { duration: 1, ease: [.6, .01, -0.05, 0.9] }
const hoverTransition = { duration: 0.5, ease: [.6, .01, -0.05, 0.9] }
const Home = () => {
    return (
        <div className="container mt-15 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!-- Section 1 --> */}
            <section class="w-full px-8 text-gray-700 bg-white">
                <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                    <div class="relative flex flex-col md:flex-row">
                        <a href="#_" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                            <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">galleri anti<span class="text-indigo-600">.</span></span>
                        </a>
                    </div>
                </div>
            </section>
           
            {/* <!-- Section 2 --> */}
            <section class="w-full px-2 pt-16 bg-white md:px-0">
                <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                    <div class="flex flex-wrap items-center sm:-mx-3">
                        <div class="w-full md:w-1/2 md:px-3">
                            <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <motion.ul className="flex flex-col w-full justify-center items-start text-center md:text-left"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                    <h4 className="text-2xl font-light uppercase"> Past exhibitions</h4>
                                    <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                        <Link className="text-5xl font-bold pl-8 uppercase" to="/needForStreet" >Need For Street</Link>
                                    </motion.li>
                                    <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                        <Link className="text-5xl font-bold pl-8 uppercase" to="/exhibition" >Plastic</Link>
                                    </motion.li>
                                    <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                        <Link className="text-5xl font-bold pl-8 uppercase" to="/about">Blood</Link>
                                    </motion.li>
                                    <h4 className="text-2xl font-light uppercase"> About us</h4>
                                    <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                        <Link className="text-5xl font-bold pl-8 uppercase" to="/exhibition" >Our manifesto</Link>
                                    </motion.li>
                                    <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                        <Link className="text-5xl font-bold pl-8 uppercase" to="/about">Magazine</Link>
                                    </motion.li>
                                    <motion.li whileHover={{ skewY: 3 }} transition={hoverTransition}>
                                        <Link className="text-5xl font-bold pl-8 uppercase" to="/contact">Contact</Link>
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2">
                            <div class="w-full h-auto overflow-hidden">
                                <div className="w-full pt-16 flex justify-center text-center overflow-hidden">
                                    <motion.img className="max-w-lg" src={mock} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;