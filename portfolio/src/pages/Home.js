import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { scroller } from 'react-scroll';
import "./Home.css";

import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const totalSections = 4;

    const scrollToSection = (section) => {
        scroller.scrollTo(`section${section}`, {
            smooth: true,
            duration: 500,
            offset: -60,
        });
    };

    let scrollTotal = 0;
    const threshold = 100;

    const handleScroll = (e) => {
        e.preventDefault();

        scrollTotal += e.deltaY

        if (scrollTotal > threshold) {
            if (currentSection < totalSections) {
                setCurrentSection(currentSection + 1);
                scrollToSection(currentSection + 1);
            }
            scrollTotal = 0;
        } else if (scrollTotal < -threshold) {
            if (currentSection > 0) {
                setCurrentSection(currentSection - 1);
                scrollToSection(currentSection - 1);
            }
            scrollTotal = 0;
        }
    }

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [currentSection]);

    return (
        <div>
            <div className="content">
                <div className="section" id="section0">
                    <h1>Welcome to</h1>
                    <motion.div
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1>My Portfolio</h1>
                    </motion.div>
                </div>
                <div className="section" id="section1">
                    <h1><Link to="/about">About</Link></h1>
                </div>
                <div className="section" id="section2">
                    <h1><Link to="/experience">Experience</Link></h1>
                </div>
                <div className="section" id="section3">
                    <h1><Link to="/projects">Projects</Link></h1>
                </div>
                <div className="home-narrator">
                    <img alt="Image" />
                </div>
            </div>
        </div>
    )
};

export default Home