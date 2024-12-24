import { Link, Outlet } from "react-router-dom"
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            <Outlet />

            <footer className="footer">
                <p>© {new Date().getFullYear()} Giyoung Kim. All rights reserved.</p>
            </footer>
        </>
    )
};

export default Layout;