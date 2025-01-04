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
                    <div onClick={open}>
                        <code className="h2"><Link to="/">Giyoung's Portfolio</Link></code>
                    </div>
                    <Hamburger color="white" toggled={isOpen} toggle={toggleIsOpen} />
                </div>
                <div className="rightnavbar">
                    <Link to="https://github.com/giykim/portfolio" target="_blank" rel="noopener noreferrer"><code className="p">Source Code</code></Link>
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
                    <li><code className="p"><Link to="/">Home</Link></code></li>
                    <li><code className="p"><Link to="/about">About</Link></code></li>
                    <li><code className="p"><Link to="/experience">Experience</Link></code></li>
                    <li><code className="p"><Link to="/projects">Projects</Link></code></li>
                </div>
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