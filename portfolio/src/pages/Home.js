import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ScrollableSections from '../components/ScrollableSections';
import "./Home.css";

const Home = () => {
    const sections = [
        <>
            <h1>Welcome to</h1>
            <motion.div
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1>My Portfolio</h1>
            </motion.div>
        </>,
        <h1><Link to="/about">About</Link></h1>,
        <h1><Link to="/experience">Experience</Link></h1>,
        <h1><Link to="/projects">Projects</Link></h1>,
    ];

    return (
        <div>
            <div className="content">
                <ScrollableSections sections={sections} />
                <div className="home-narrator">
                    <img alt="profile" />
                </div>
            </div>
        </div>
    )
};

export default Home