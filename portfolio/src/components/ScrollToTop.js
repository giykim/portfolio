import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
        const scrollableElement = document.documentElement || document.body;

        scrollableElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [location]);
  
    return null;
};

export default ScrollToTop;