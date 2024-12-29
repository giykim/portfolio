import ScrollableSections from "../components/ScrollableSections";
import "./About.css";
import Ease from "../components/Ease";

const About = () => {
    const sections = [
        <>
            <div class="imgcontainer">
                <img src="images/profile.png" alt="Profile" />
            </div>
            <Ease>
                <p>
                    I'm a quantitative undergraduate with a strong foundation in <strong>software engineering</strong>, <strong>machine learning</strong>, and <strong>statistical modeling</strong>.
                    With hands-on experience in <strong>agile development</strong> and advanced research on <strong>interpretable models</strong>, I am eager to apply my skills in a Developer or Research position.
                    My goal is to contribute to innovative projects and initiatives while continuing to grow professionally in a dynamic environment.
                </p>
                <p>
                    Outside of my technical pursuits, I have a passion for weightlifting, gaming, and listening to music.
                    Growing up, I swam and played the piano, and I continually strive to revisit these activities alongside exploring new hobbies.
                    Recently, I've been exploring fashion, running, and learning to play the guitar.
                    These interests help me maintain a balanced and creative lifestyle.
                </p>
            </Ease>
        </>,
        <>
            <div><h1>Education</h1></div>
            <div class="listheader">
                <div class="organization">
                    <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                        <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                            <div class="logocontainer">
                                <img src="images/duke.png" alt="Duke Logo" class="logo" />
                            </div>
                            <p class="name">Duke University &#8599;</p>
                        </a>
                    </a>
                </div>
                <p class="date">August 2021 - May 2025</p>
            </div>
            <ul>
                <li>BS in <strong>Computer Science</strong></li>
                <li>
                    Data Structures and Algorithms,
                    Design and Analysis of Algorithms,
                    Computer Architecture,
                    Intro to Data Science,
                    Intro to Database Systems,
                    Intro to AI,
                    Theory and Algorithms for Machine Learning, 
                    Design and Testing of Algorithmic Trading Systems
                </li>
                <li>BS in <strong>Statistical Science</strong></li>
                <li>
                    Regression Analysis,
                    Math of Regression,
                    Probability,
                    Machine Learning and Data Mining,
                    Statistical Learning and Inference,
                    Intro to Bayesian Statistics
                </li>
                <li><strong>Mathematics</strong> Minor</li>
                <li>
                    Linear Algebra and Applications,
                    Multivariable Calculus,
                    Ordinary and Differential Equations,
                    Applied Stochastic Processes
                </li>
            </ul>
            
        </>,
        <>
            <div><h1>Technical Skills</h1></div>
            <ul>
                <li><strong>Languages: </strong>Python, C#, C/C++, Java, SQL (Postgres), R, JavaScript, HTML/CSS</li>
                <li><strong>Frameworks: </strong> .NET, Flask, React, Node.js, Material-UI</li>
                <li><strong>Developer Tools: </strong>Git, Azure, Docker, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse</li>
                <li><strong>Libraries: </strong>NumPy, pandas, Scikit-learn, PyTorch, TensorFlow, Selenium, BeautifulSoup, Matplotlib, Plotly Das</li>
            </ul>
        </>,
        <>
            <div><h1>Contact</h1></div>
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
        <div class="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default About