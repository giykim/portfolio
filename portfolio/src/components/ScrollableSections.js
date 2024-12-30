import { useState, useEffect } from "react";
import { scroller } from 'react-scroll';
import "./ScrollableSections.css"

const ScrollableSections = ({ sections }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const totalSections = sections.length;
    let scrollTotal = 0;
    const threshold = 50;

    const scrollToSection = (section) => {
        scroller.scrollTo(`section${section}`, {
            smooth: true,
            duration: 500,
            offset: 0,
        });
    };

    const handleScroll = (e) => {
        scrollTotal += e.deltaY

        if (scrollTotal > threshold) {
            if (currentSection < totalSections - 1) {
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
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [currentSection]);

    return (
        <div className="scrollable-sections">
            {sections.map((section, index) => (
                <div className="section" id={`section${index}`} key={index}>
                    {section}
                </div>
            ))}
        </div>
    );
}

export default ScrollableSections;