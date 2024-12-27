import { Link } from "react-router-dom"
import ScrollableSections from '../components/ScrollableSections';
import "./Home.css";
import Ease from "../components/Ease";

const Home = () => {
    const sections = [
        <>
            <h1>Welcome to My Portfolio!</h1>
            <Ease>
                <p>
                    Hi, I'm <strong>Giyoung</strong>, a passionate and driven undergraduate student at Duke University.
                    I am experienced in software engineering, machine learning, and statistical modeling.
                    I'm always looking for innovative ways to apply my skills to real-world problems, whether it's through developing software or conducting research.
                    Feel free to explore my portfolio and learn more about my journey in the tech world!
                </p>
            </Ease>
        </>,
        <>
            <h1><Link to="/about">About</Link></h1>
            <p>
                Click to learn more about my <strong>education</strong>, <strong>technical skills</strong>, and <strong>contact</strong>!
            </p>
        </>,
        <>
            <h1><Link to="/experience">Experience</Link></h1>
            <p>
                Click to learn more about my professional <strong>experience</strong>!
            </p>
        </>,
        <>
            <h1><Link to="/projects">Projects</Link></h1>
            <p>
                Click to learn more about my personal <strong>projects</strong>!
            </p>
        </>,
    ];

    return (
        <div>
            <div className="content">
                <ScrollableSections sections={sections} />
                <div className="home-narrator">
                </div>
            </div>
        </div>
    )
};

export default Home