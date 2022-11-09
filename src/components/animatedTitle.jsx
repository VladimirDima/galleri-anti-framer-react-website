import React from "react";
import { motion } from "framer-motion";

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

const animatedTitle = (props) => {
    return (
        <motion.h1 initial="initial" animate="animate" exit={{ opacity: 0 }} variants={title} className="text-7xl flex font-bold uppercase ">
            <motion.div className="blood-font" variants={letter}>B</motion.div>
            <motion.div className="blood-font" variants={letter}>L</motion.div>
            <motion.div className="blood-font" variants={letter}>O</motion.div>
            <motion.div className="blood-font" variants={letter}>O</motion.div>
            <motion.div className="blood-font" variants={letter}>D</motion.div>
        </motion.h1>
    );
}

export default animatedTitle;