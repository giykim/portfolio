import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();
  
    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll position to top
    }, [location]);
  
    return null;
};

export default ScrollToTop;