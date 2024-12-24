import { Link, Outlet } from "react-router-dom"
import "./Layout.css";

const Layout = () => {
    return (
        <div className="content">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Outlet />
        </div>
    )
};

export default Layout;