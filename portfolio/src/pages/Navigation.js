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

    const open = () => {
        setIsOpen(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="leftnavbar">
                    <button
                        onClick={open}
                        className="nav-home-btn"
                        aria-label="Go to home page"
                    >
                        <code className="h2"><Link to="/">Giyoung's Portfolio</Link></code>
                    </button>
                    <div
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="hamburger-btn"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && toggleIsOpen()}
                    >
                        <Hamburger color="white" toggled={isOpen} toggle={toggleIsOpen} />
                    </div>
                </div>
                <div className="rightnavbar">
                    <a href="https://github.com/giykim/portfolio" target="_blank" rel="noopener noreferrer"><code className="p">Source Code</code></a>
                    <a href="https://github.com/giykim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/giyoung-kim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </nav>
            <ul className={`navlinks ${isOpen ? "open" : ""}`} role="navigation" aria-label="Main navigation">
                <li onClick={toggleIsOpen}><code className="p"><Link to="/">Home</Link></code></li>
                <li onClick={toggleIsOpen}><code className="p"><Link to="/about">About</Link></code></li>
            </ul>

            <Ease>
                <Outlet />
            </Ease>

            <footer className="footer">
                <code className="p">© {new Date().getFullYear()} Giyoung Kim. All rights reserved.</code>
            </footer>
        </>
    )
};

export default Navigation;