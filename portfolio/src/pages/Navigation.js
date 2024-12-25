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
            <nav className="navbar">
                <h1><Link to="/">Giyoung Kim</Link></h1>
                <Hamburger toggled={isOpen} toggle={toggleIsOpen} />
            </nav>
            <ul className={`navlinks ${isOpen ? "open" : ""}`}>
                <div onClick={toggleIsOpen}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </div>
            </ul>

            <motion.div
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
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