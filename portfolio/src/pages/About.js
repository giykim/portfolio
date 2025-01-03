import ScrollableSections from "../components/ScrollableSections";
import "./About.css";
import Ease from "../components/Ease";

const About = () => {
    const sections = [
        <>
            <div className="imgcontainer">
                <img src="images/profile.png" alt="Profile" />
            </div>
            <Ease>
                <code className="p">
                    I'm a quantitative undergraduate with a strong foundation in <strong>software engineering</strong>, <strong>machine learning</strong>, and <strong>statistical modeling</strong>.
                    With hands-on experience in <strong>agile development</strong> and advanced research on <strong>interpretable models</strong>, I am eager to apply my skills in a Developer or Research position.
                    My goal is to contribute to innovative projects and initiatives while continuing to grow professionally in a dynamic environment.
                </code>
                <code className="p">
                    Outside of my technical pursuits, I have a passion for weightlifting, gaming, and listening to music.
                    Growing up, I swam and played the piano, and I continually strive to revisit these activities alongside exploring new hobbies.
                    Recently, I've been exploring fashion, running, and learning to play the guitar.
                    These interests help me maintain a balanced and creative lifestyle.
                </code>
            </Ease>
        </>,
        <>
            <div><code className="h1">Education</code></div>

            <div>
                <div className="listheader">
                    <div className="organization">
                        <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                            <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                                <div className="logocontainer">
                                    <img src="images/duke.png" alt="Duke Logo" className="logo" />
                                </div>
                                <code className="p name">Duke University &#8599;</code>
                            </a>
                        </a>
                    </div>
                    <code className="p date">August 2021 - May 2025</code>
                </div>
                <ul>
                    <li><code className="p">BS in <strong>Computer Science</strong></code></li>
                    <li><code className="p">
                        Data Structures and Algorithms,
                        Design and Analysis of Algorithms,
                        Computer Architecture,
                        Intro to Data Science,
                        Intro to Database Systems,
                        Intro to AI,
                        Theory and Algorithms for Machine Learning, 
                        Design and Testing of Algorithmic Trading Systems
                    </code></li>
                    <li><code className="p">BS in <strong>Statistical Science</strong></code></li>
                    <li><code className="p">
                        Regression Analysis,
                        Math of Regression,
                        Probability,
                        Machine Learning and Data Mining,
                        Statistical Learning and Inference,
                        Intro to Bayesian Statistics
                    </code></li>
                    <li><code className="p"><strong>Mathematics</strong> Minor</code></li>
                    <li><code className="p">
                        Linear Algebra and Applications,
                        Multivariable Calculus,
                        Ordinary and Differential Equations,
                        Applied Stochastic Processes
                    </code></li>
                </ul>
            </div>
        </>,
        <>
            <div><code className="h1">Technical Skills</code></div>
            <ul>
                <li><code className="p"><strong>Languages: </strong>Python, C#, C/C++, Java, SQL (Postgres), R, JavaScript, HTML/CSS</code></li>
                <li><code className="p"><strong>Frameworks: </strong> .NET, Flask, React, Node.js, Material-UI</code></li>
                <li><code className="p"><strong>Developer Tools: </strong>Git, Azure, Docker, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse</code></li>
                <li><code className="p"><strong>Libraries: </strong>NumPy, pandas, Scikit-learn, PyTorch, TensorFlow, Selenium, BeautifulSoup, Matplotlib, Plotly Das</code></li>
            </ul>
        </>,
        <>
            <div><code className="h1">Contact</code></div>
            <ul>
                <li><code className="p">
                    <strong>Email: </strong><a href="mailto:gk122@duke.edu">gk122@duke.edu &#8599;</a>
                </code></li>
                <li><code className="p">
                    <strong>LinkedIn: </strong><a href="https://linkedin.com/in/giyoung-kim" target="_blank" rel="noopener noreferrer">linkedin.com/in/giyoung-kim &#8599;</a>
                </code></li>
                <li><code className="p">
                    <strong>GitHub: </strong><a href="https://github.com/giykim" target="_blank" rel="noopener noreferrer">github.com/giykim &#8599;</a>
                </code></li>
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