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
                    I'm a Software Development Engineer at <strong>AWS</strong> with dual B.S. degrees in Computer Science and Statistical Science from <strong>Duke University</strong>, passionate about using ML and AI to build better customer experiences.
                </code>
                <ul>
                    <li><code className="p">Hobbies: building ML / AI projects, Counter-Strike, weightlifting, bouldering</code></li>
                    <li><code className="p">Shows: The Simpsons, Bojack Horseman, Breaking Bad</code></li>
                    <li><code className="p">Interests: Watches, FC Barcelona</code></li>
                </ul>
            </Ease>
        </>,
        <>
            <div><code className="h1">Education</code></div>
        </>,
        <>
            <div className="content-block">
                <div className="listheader">
                    <div className="organization">
                        <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                            <div className="logocontainer">
                                <img src="images/duke.png" alt="Duke Logo" className="logo" />
                            </div>
                            <code className="p name">Duke University &#8599;</code>
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
        </>,
        <>
            <ul>
                <li><code className="p"><strong>Languages: </strong>Java, Python, JavaScript, C#, C++</code></li>
                <li><code className="p"><strong>Databases: </strong>MongoDB, DynamoDB, PostgreSQL</code></li>
                <li><code className="p"><strong>Cloud &amp; DevOps: </strong>AWS (Lambda, ECS, Step Functions, CloudFormation, CloudWatch), Docker, Git, Azure</code></li>
            </ul>
        </>,
        <>
            <div><code className="h1">Experience</code></div>
        </>,
        <>
            <div className="content-block">
                <div><code className="h1">Software Engineer</code></div>
                <div className="listheader">
                    <div className="organization">
                        <a href="https://amazon.com/" target="_blank" rel="noopener noreferrer">
                            <div className="logocontainer">
                                <img src="images/amazon-logo.png" alt="Amazon Logo" className="logo" />
                            </div>
                            <code className="p name">Amazon &#8599;</code>
                        </a>
                    </div>
                    <code className="p date">June 2025 - January 2026</code>
                </div>
                <ul>
                    <li><code className="p">Filler text</code></li>
                </ul>
            </div>
        </>,
        <>
            <div className="content-block">
                <div><code className="h1">ML Research Assistant</code></div>
                <div className="listheader">
                    <div className="organization">
                        <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                            <div className="logocontainer">
                                <img src="images/duke.png" alt="Duke Logo" className="logo" />
                            </div>
                            <code className="p name">Duke University &#8599;</code>
                        </a>
                    </div>
                    <code className="p date">May 2023 - June 2025</code>
                </div>
                <ul>
                    <li><code className="p">Filler text</code></li>
                </ul>
            </div>
        </>,
        <>
            <div className="content-block">
                <div><code className="h1">SWE Intern</code></div>
                <div className="listheader">
                    <div className="organization">
                        <a href="https://www.hagerty.com/" target="_blank" rel="noopener noreferrer">
                            <div className="logocontainer">
                                <img src="images/hagerty.png" alt="Hagerty Logo" className="logo" />
                            </div>
                            <code className="p name">Hagerty &#8599;</code>
                        </a>
                    </div>
                    <code className="p date">May 2024 - August 2024</code>
                </div>
                <ul>
                    <li><code className="p">Filler text</code></li>
                </ul>
            </div>
        </>,
        <>
            <div className="content-block">
                <div><code className="h1">SWE Intern</code></div>
                <div className="listheader">
                    <div className="organization">
                        <a href="https://broadsword.com/" target="_blank" rel="noopener noreferrer">
                            <div className="logocontainer">
                                <img src="images/broadsword.png" alt="Broadsword Logo" className="logo" />
                            </div>
                            <code className="p name">Broadsword Online Games &#8599;</code>
                        </a>
                    </div>
                    <code className="p date">May 2022 - July 2022</code>
                </div>
                <ul>
                    <li><code className="p">Filler text</code></li>
                </ul>
            </div>
        </>,
        <>
            <div><code className="h1">Projects</code></div>
        </>,
        <>
            <div className="content-block">
                <div><code className="h1">Mini Amazon</code></div>
                <div className="listheader">
                    <code className="p"><a href="https://github.com/giykim/mini-amazon" target="_blank" rel="noopener noreferrer">View repository &#8599;</a></code>
                    <code className="p date">September 2024 - November 2024</code>
                </div>
                <ul>
                    <li><code className="p">Built a full-stack web application with Flask replicating Amazon, including user authentication, product catalog, and shopping cart</code></li>
                    <li><code className="p">Integrated PostgreSQL <strong>database</strong> for managing user accounts, product inventory, and order transactions</code></li>
                    <li><code className="p">Developed responsive UI/UX with HTML, CSS, and JavaScript for seamless user interaction</code></li>
                </ul>
                <div className="imgcontainer">
                    <img src="images/amazon.png" alt="Mini Amazon e-commerce project screenshot" />
                </div>
            </div>
        </>,
        <>
            <div className="content-block">
                <div><code className="h1">PLTR Trade Strategy</code></div>
                <div className="listheader">
                    <code className="p"><a href="https://github.com/giykim/algo-project" target="_blank" rel="noopener noreferrer">View repository &#8599;</a></code>
                    <code className="p date">March 2024 - April 2024</code>
                </div>
                <ul>
                    <li><code className="p">Developed a Dash app to demonstrate a trading strategy focused on Palantir stock</code></li>
                    <li><code className="p">Used Selenium for web scraping to gather features for <strong>forecasting</strong> short-term market movements</code></li>
                    <li><code className="p">Trained <strong>machine learning</strong> models to predict future stock movements</code></li>
                    <li><code className="p">Designed a buy/sell algorithm with performance analysis to filter underperforming trades based on historical data</code></li>
                </ul>
                <div className="imgcontainer">
                    <img src="images/palantir.png" alt="PLTR trading strategy visualization" />
                </div>
            </div>
        </>,
        <>
            <div><code className="h1">Publications</code></div>
        </>,
        <>
            <ul>
                <li><code className="p">
                    <strong>Google Scholar: </strong><a href="https://scholar.google.com/citations?user=cUceUnMAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">scholar.google.com &#8599;</a>
                </code></li>
            </ul>
        </>,
        <>
            <div><code className="h1">Contact</code></div>
        </>,
        <>
            <ul>
                <li><code className="p">
                    <strong>Email: </strong><a href="mailto:giy.kim27@gmail.com">giy.kim27@gmail.com &#8599;</a>
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
        <div className="content" style={{ height: '100%' }}>
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default About
