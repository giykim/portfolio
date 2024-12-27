import ScrollableSections from "../components/ScrollableSections";
import "./About.css";
import EaseDiv from "../components/EaseDiv";

const About = () => {
    const sections = [
        <>
            <h1>Summary</h1>
            <EaseDiv>
                <p>
                    I'm a quantitative undergraduate with a strong foundation in <strong>software engineering</strong>, <strong>machine learning</strong>, and <strong>statistical modeling</strong>.
                    With hands-on experience in <strong>agile development</strong> and advanced research on <strong>interpretable models</strong>, I am eager to apply my skills in a Developer or Research position.
                    My goal is to contribute to innovative projects and initiatives while continuing to grow professionally in a dynamic environment.
                </p>
            </EaseDiv>
        </>,
        <>
            <h1>Education</h1>
            <div className="listheader">
                <p className="organization"><a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">Duke University &#8599;</a></p>
                <p className="date">August 2021 - May 2025</p>
            </div>
            <ul>
                <li>BS in <strong>Computer Science</strong></li>
                <li>BS in <strong>Statistical Science</strong></li>
                <li><strong>Mathematics</strong> Minor</li>
            </ul>
            
        </>,
        <>
            <h1><strong>Technical Skills</strong></h1>
            <ul>
                <li><strong>Languages: </strong>Python, C#, C/C++, Java, SQL (Postgres), R, JavaScript, HTML/CSS</li>
                <li><strong>Frameworks: </strong> .NET, Flask, React, Node.js, Material-UI</li>
                <li><strong>Developer Tools: </strong>Git, Azure, Docker, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse</li>
                <li><strong>Libraries: </strong>NumPy, pandas, Scikit-learn, PyTorch, TensorFlow, Selenium, BeautifulSoup, Matplotlib, Plotly Das</li>
            </ul>
        </>,
        <>
            <h1><strong>Contact</strong></h1>
            <ul>
                <li>
                    <strong>Email: </strong><a href="mailto:gk122@duke.edu">gk122@duke.edu &#8599;</a>
                </li>
                <li>
                    <strong>LinkedIn: </strong><a href="https://linkedin.com/in/giyoung-kim" target="_blank" rel="noopener noreferrer">linkedin.com/in/giyoung-kim &#8599;</a>
                </li>
                <li>
                    <strong>GitHub: </strong><a href="https://github.com/giykim" target="_blank" rel="noopener noreferrer">github.com/giykim &#8599;</a>
                </li>
            </ul>
        </>,
    ];

    return (
        <div className="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default About