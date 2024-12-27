import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Divide as Hamburger } from "hamburger-react";
import "./Navigation.css";
import EaseDiv from "../components/EaseDiv";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <h1><Link to="/">Giyoung Kim</Link></h1>
                <Hamburger color="white" toggled={isOpen} toggle={toggleIsOpen} />
            </nav>
            <ul className={`navlinks ${isOpen ? "open" : ""}`}>
                <div onClick={toggleIsOpen}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </div>
            </ul>

            <EaseDiv>
                <Outlet />
            </EaseDiv>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Giyoung Kim. All rights reserved.</p>
            </footer>
        </>
    )
};

export default Navigation;