import { Link } from "react-router-dom"
import ScrollableSections from '../components/ScrollableSections';
import "./Home.css";
import Ease from "../components/Ease";

const Home = () => {
    const sections = [
        <>
            {/* <FloatingImages /> */}
            <div><code class="h1">Welcome to My Portfolio</code></div>
            <Ease>
                <code class="p">
                    Hi, I'm <strong>Giyoung</strong>, a passionate and driven undergraduate student at Duke University.
                    I am experienced in software engineering, machine learning, and statistical modeling.
                    I'm always looking for innovative ways to apply my skills to real-world problems, whether it's through developing software or conducting research.
                    Feel free to explore my portfolio and learn more about my journey in the tech world!
                </code>
            </Ease>
        </>,
        <>
            <Link to="/about"><code class="h1">About</code></Link>
            <code class="p">
                Click to learn more about my <strong>education</strong>, <strong>technical skills</strong>, and <strong>contact</strong>!
            </code>
        </>,
        <>
            <Link to="/experience"><code class="h1">Experience</code></Link>
            <code class="p">
                Click to learn more about my professional <strong>experience</strong>!
            </code>
        </>,
        <>
            <Link to="/projects"><code class="h1">Projects</code></Link>
            <code class="p">
                Click to learn more about my personal <strong>projects</strong>!
            </code>
        </>,
    ];

    return (
        <div>
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Home