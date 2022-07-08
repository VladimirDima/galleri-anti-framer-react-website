import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring
} from "framer-motion";
import { Link } from "react-router-dom";
import hand from '../assets/needForStreet/hand.jpeg';
import concert from '../assets/needForStreet/concert.jpeg';
import banner from '../assets/needForStreet/banner.jpeg';


import HorizontalScroll from 'react-scroll-horizontal'

const transition = { duration: 1, ease: [.6, .01, -0.05, 0.9] }

const title = {
    animate: {
        y: 0,
        transition: {
            staggerChildren: .04,
            staggerDirection: -1
        }
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


const NeedForStreet = () => {
    const scrollRef = useRef(null)
    const ghostRef = useRef(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportW, setViewportW] = useState(0)

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth)
    }, [scrollRef])

    const onResize = useCallback(entries => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width)
        }
    }, [])

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries => onResize(entries))
        resizeObserver.observe(ghostRef.current)
        return () => resizeObserver.disconnect()
    }, [onResize])

    const { scrollYProgress } = useViewportScroll()
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange + viewportW]
    )
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(transform, physics)

    return (
        <div>
            <div className="container mt-15 px-3 mx-auto">
                <section className="w-full px-8 text-gray-700 bg-white">
                    <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
                        <div className="relative flex flex-col md:flex-row">
                            <a href="#_" className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
                                <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">galleri anti<span className="text-indigo-600">.</span></span>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="scroll-container w-full px-2 pt-16 bg-white md:px-0">
                    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">

                        <motion.section
                            ref={scrollRef}
                            style={{ x: spring }}
                            className="thumbnails-container"
                        >
                            <div className="thumbnails flex flex-wrap items-center sm:-mx-3">

                                <div className="pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-6 md:pb-0">
                                    <motion.h1 initial="initial" animate="animate" exit="initial" variants={title} className="text-7xl flex font-bold uppercase overflow-hidden">
                                        <motion.div variants={letter}>N</motion.div>
                                        <motion.div variants={letter}>e</motion.div>
                                        <motion.div variants={letter}>e</motion.div>
                                        <motion.div variants={letter}>d</motion.div>
                                        <motion.div variants={letter}>f</motion.div>
                                        <motion.div variants={letter}>o</motion.div>
                                        <motion.div variants={letter}>r</motion.div>
                                        <motion.div variants={letter}>s</motion.div>
                                        <motion.div variants={letter}>t</motion.div>
                                        <motion.div variants={letter}>r</motion.div>
                                        <motion.div variants={letter}>e</motion.div>
                                        <motion.div variants={letter}>e</motion.div>
                                        <motion.div variants={letter}>t</motion.div>     
                                    </motion.h1>
                                    <div className="overflow-hidden">
                                        <motion.div initial={{ y: 250 }} animate={{ y: 0 }} exit={{ y: 250 }} transition={transition}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                            <Link to="/">
                                                <div className="bg-black hover:bg-gray-700 mt-7 w-20 text-white font-bold py-2 px-4 rounded-full">
                                                    Home
                                                </div>
                                            </Link>
                                        </motion.div>
                                    </div>
                                </div>
                            
                                <div className="h-auto overflow-hidden">
                                    <motion.div className="w-full py-6 flex justify-center text-center overflow-hidden"
                                        initial="initial"
                                        animate={{ width: 300 }}
                                        exit={{ width: 480 }}
                                        transition={transition}
                                    >
                                        <motion.img className="max-w-lg" src={hand} alt=""
                                            initial="initial"
                                            animate={{ scale: 1.3 }}
                                            exit={{ scale: 1 }}
                                            transition={transition}
                                        />

                                    </motion.div>
                                </div>
                                <motion.img className="max-w-lg" src={concert} alt=""
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={transition} />
                                <img className="max-w-lg" src={banner} alt="" />
                                <div className="thumbnail" />
                                <div className="thumbnail" />
                                <div className="thumbnail" />
                                <div className="thumbnail" />
                                <div className="thumbnail" />
                            </div>
                        </motion.section>

                    </div>
                </div>
                <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
                {/* <section className="w-full px-2 pt-16 bg-white md:px-0">
                    <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                        <div className="flex flex-wrap items-center sm:-mx-3">
                            <div className="w-full md:w-1/2 md:px-3">
                                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-5 md:pb-0">
                                    <motion.h1 initial="hidden" animate="visible" exit="hidden" variants={list} className="text-7xl font-bold uppercase overflow-hidden">
                                        <motion.span variants={item}>P</motion.span>
                                        <motion.span variants={item}>l</motion.span>
                                        <motion.span variants={item}>a</motion.span>
                                        <motion.span variants={item}>s</motion.span>
                                        <motion.span variants={item}>t</motion.span>
                                        <motion.span variants={item}>i</motion.span>
                                        <motion.span variants={item}>c</motion.span>
                                    </motion.h1>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <Link to="/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Home</Link>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="w-full h-auto overflow-hidden">
                                    <motion.div className="w-full py-6 flex justify-center text-center overflow-hidden"
                                        initial="initial"
                                        animate={{ width: 300 }}
                                        exit={{ width: 480 }}
                                        transition={transition}
                                    >
                                        <motion.img className="max-w-lg" src={mock} alt=""
                                            initial="initial"
                                            animate={{ scale: 1.3 }}
                                            exit={{ scale: 1 }}
                                            transition={transition}
                                        />

                                    </motion.div>
                                </div>
                            </div>
                            <img className="max-w-lg" src={mask} alt="" />
                        </div>
                    </div>
                </section> */}
            </div>


        </div>
    );
}

export default NeedForStreet;