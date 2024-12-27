import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Divide as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Navigation.css";
import Ease from "../components/Ease";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="subnavbar">
                    <h1><Link to="/">Giyoung's Portfolio</Link></h1>
                    <Hamburger color="white" toggled={isOpen} toggle={toggleIsOpen} />
                </div>
                <div className="subnavbar">
                    <Link to="https://github.com/giykim/portfolio" target="_blank" rel="noopener noreferrer">Source Code</Link>
                    <a href="https://github.com/giykim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/giyoung-kim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </nav>
            <ul className={`navlinks ${isOpen ? "open" : ""}`}>
                <div onClick={toggleIsOpen}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </div>
            </ul>

            <Ease>
                <Outlet />
            </Ease>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Giyoung Kim. All rights reserved.</p>
            </footer>
        </>
    )
};

export default Navigation;