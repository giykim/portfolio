import { Link } from "react-router-dom"
import ScrollableSections from '../components/ScrollableSections';
import "./Home.css";
import EaseDiv from "../components/EaseDiv";

const Home = () => {
    const sections = [
        <>
            <h1>Welcome to My Portfolio!</h1>
            <EaseDiv>
                <p>Hi, I'm <strong>Giyoung</strong>!</p>
            </EaseDiv>
        </>,
        <>
            <h1><Link to="/about">About</Link></h1>
            <p>
                Click here to learn more about my <strong>education</strong>, <strong>technical skills</strong>, and <strong>contact</strong>!
            </p>
        </>,
        <>
            <h1><Link to="/experience">Experience</Link></h1>
            <p>
                Click here to learn more about my professional <strong>experience</strong>!
            </p>
        </>,
        <>
            <h1><Link to="/projects">Projects</Link></h1>
            <p>
                Click here to learn more about my personal <strong>projects</strong>!
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