import { Link } from "react-router-dom"
import ScrollableSections from '../components/ScrollableSections';
import "./Home.css";
import Ease from "../components/Ease";

const Home = () => {
    const sections = [
        <>
            {/* <FloatingImages /> */}
            <div><h1>Welcome to My Portfolio</h1></div>
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
            <Link to="/about"><h1>About</h1></Link>
            <p>
                Click to learn more about my <strong>education</strong>, <strong>technical skills</strong>, and <strong>contact</strong>!
            </p>
        </>,
        <>
            <Link to="/experience"><h1>Experience</h1></Link>
            <p>
                Click to learn more about my professional <strong>experience</strong>!
            </p>
        </>,
        <>
            <Link to="/projects"><h1>Projects</h1></Link>
            <p>
                Click to learn more about my personal <strong>projects</strong>!
            </p>
        </>,
    ];

    return (
        <div class="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Home