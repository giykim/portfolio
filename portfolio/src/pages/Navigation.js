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
            <nav class="navbar">
                <div class="subnavbar">
                    <code class="h2"><Link to="/">Giyoung's Portfolio</Link></code>
                    <Hamburger color="white" toggled={isOpen} toggle={toggleIsOpen} />
                </div>
                <div class="subnavbar">
                    <Link to="https://github.com/giykim/portfolio" target="_blank" rel="noopener noreferrer"><code class="p">Source Code</code></Link>
                    <a href="https://github.com/giykim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/giyoung-kim" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </nav>
            <ul class={`navlinks ${isOpen ? "open" : ""}`}>
                <div onClick={toggleIsOpen}>
                    <li><code class="p"><Link to="/">Home</Link></code></li>
                    <li><code class="p"><Link to="/about">About</Link></code></li>
                    <li><code class="p"><Link to="/experience">Experience</Link></code></li>
                    <li><code class="p"><Link to="/projects">Projects</Link></code></li>
                </div>
            </ul>

            <Ease>
                <Outlet />
            </Ease>

            <footer class="footer">
                <code class="p">© {new Date().getFullYear()} Giyoung Kim. All rights reserved.</code>
            </footer>
        </>
    )
};

export default Navigation;