import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div initial={{ translateY: 0 }} animate={{ translateY: 100 }} exit={{ translateY: 0 }}>
            <div>
                <h1>About</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Link to="/">Home</Link>
            </div>
        </motion.div>

    );
}

export default About;