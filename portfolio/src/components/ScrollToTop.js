import { useEffect } from "react";

const ScrollToTop = () => {
    useEffect(() => {
        const scrollableElement = document.documentElement || document.body;

        scrollableElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return null;
};

export default ScrollToTop;
