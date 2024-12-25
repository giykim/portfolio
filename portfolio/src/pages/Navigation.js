import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { motion } from "framer-motion"
import { Divide as Hamburger } from "hamburger-react";
import "./Navigation.css";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav>
                <h1>Giyoung Kim</h1>
                <div class="hamburger" onClick={toggleIsOpen}>
                    <Hamburger />
                </div>
                <ul className={`navlinks ${isOpen ? "open" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <Outlet />
            </motion.div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Giyoung Kim. All rights reserved.</p>
            </footer>
        </>
    )
};

export default Navigation;