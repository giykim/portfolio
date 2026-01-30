import { useState, useEffect, useRef, useCallback } from "react";
import { scroller } from 'react-scroll';
import "./ScrollableSections.css"

const ScrollableSections = ({ sections }) => {
    const [currentSection, setCurrentSection] = useState(0);
    const totalSections = sections.length;
    const scrollTotalRef = useRef(0);
    const threshold = 200;

    const scrollToSection = useCallback((section) => {
        scroller.scrollTo(`section${section}`, {
            smooth: true,
            duration: 500,
            offset: 0,
        });
    }, []);

    const handleScroll = useCallback((e) => {
        scrollTotalRef.current += e.deltaY;

        if (scrollTotalRef.current > threshold) {
            setCurrentSection(prev => {
                if (prev < totalSections - 1) {
                    scrollToSection(prev + 1);
                    return prev + 1;
                }
                return prev;
            });
            scrollTotalRef.current = 0;
        } else if (scrollTotalRef.current < -threshold) {
            setCurrentSection(prev => {
                if (prev > 0) {
                    scrollToSection(prev - 1);
                    return prev - 1;
                }
                return prev;
            });
            scrollTotalRef.current = 0;
        }
    }, [totalSections, scrollToSection]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="scrollable-sections">
            {sections.map((section, index) => (
                <div className="section" id={`section${index}`} key={`section-${index}`}>
                    {section}
                </div>
            ))}
        </div>
    );
}

export default ScrollableSections;