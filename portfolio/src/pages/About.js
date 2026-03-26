import ScrollableSections from "../components/ScrollableSections";
import AccordionItem, { AccordionGroup } from "../components/AccordionItem";
import "./About.css";

const About = () => {
    const sections = [
        <>
            <div><code className="h1">About</code></div>
            <AccordionGroup>
                <AccordionItem title="Bio">
                    <div className="imgcontainer">
                        <img src="images/profile.png" alt="Profile" />
                    </div>
                    <code className="p">
                        I'm a Software Development Engineer at <strong>AWS</strong> with dual B.S. degrees in Computer Science and Statistical Science from <strong>Duke University</strong>, passionate about applying ML and AI to improve people's lives.
                    </code>
                </AccordionItem>
                <AccordionItem title="Hobbies">
                    <ul>
                        <li><code className="p">Building ML / AI projects</code></li>
                        <li><code className="p">Counter-Strike</code></li>
                        <li><code className="p">Weightlifting</code></li>
                        <li><code className="p">Bouldering</code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="Shows">
                    <ul>
                        <li><code className="p">The Simpsons</code></li>
                        <li><code className="p">Bojack Horseman</code></li>
                        <li><code className="p">Breaking Bad</code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="Interests">
                    <ul>
                        <li><code className="p">Watches</code></li>
                        <li><code className="p">FC Barcelona</code></li>
                    </ul>
                </AccordionItem>
            </AccordionGroup>
        </>,
        <>
            <div><code className="h1">Education</code></div>
            <AccordionGroup>
                <AccordionItem title="Duke University — August 2021 - May 2025">
                    <div className="listheader">
                        <div className="organization">
                            <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                                <div className="logocontainer">
                                    <img src="images/duke.png" alt="Duke Logo" className="logo" />
                                </div>
                                <code className="p name">Duke University &#8599;</code>
                            </a>
                        </div>
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
                </AccordionItem>
            </AccordionGroup>
        </>,
        <>
            <div><code className="h1">Technical Skills</code></div>
            <AccordionGroup>
                <AccordionItem title="Languages">
                    <ul>
                        <li><code className="p">Java</code></li>
                        <li><code className="p">Python</code></li>
                        <li><code className="p">JavaScript</code></li>
                        <li><code className="p">C#</code></li>
                        <li><code className="p">C++</code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="Databases">
                    <ul>
                        <li><code className="p">MongoDB</code></li>
                        <li><code className="p">DynamoDB</code></li>
                        <li><code className="p">PostgreSQL</code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="Cloud &amp; DevOps">
                    <ul>
                        <li><code className="p">AWS (Lambda, ECS, Step Functions, CloudFormation, CloudWatch)</code></li>
                        <li><code className="p">Docker</code></li>
                        <li><code className="p">Git</code></li>
                        <li><code className="p">Azure</code></li>
                    </ul>
                </AccordionItem>
            </AccordionGroup>
        </>,
        <>
            <div><code className="h1">Experience</code></div>
            <AccordionGroup>
                <AccordionItem title="Software Engineer — Amazon (June 2025 - January 2026)">
                    <div className="listheader">
                        <div className="organization">
                            <a href="https://amazon.com/" target="_blank" rel="noopener noreferrer">
                                <div className="logocontainer">
                                    <img src="images/amazon-logo.png" alt="Amazon Logo" className="logo" />
                                </div>
                                <code className="p name">Amazon &#8599;</code>
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li><code className="p">Filler text</code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="ML Research Assistant — Duke University (May 2023 - June 2025)">
                    <div className="listheader">
                        <div className="organization">
                            <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                                <div className="logocontainer">
                                    <img src="images/duke.png" alt="Duke Logo" className="logo" />
                                </div>
                                <code className="p name">Duke University &#8599;</code>
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li><code className="p">Filler text</code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="SWE Intern — Hagerty (May 2024 - August 2024)">
                    <div className="listheader">
                        <div className="organization">
                            <a href="https://www.hagerty.com/" target="_blank" rel="noopener noreferrer">
                                <div className="logocontainer">
                                    <img src="images/hagerty.png" alt="Hagerty Logo" className="logo" />
                                </div>
                                <code className="p name">Hagerty &#8599;</code>
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li><code className="p">Filler text</code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="SWE Intern — Broadsword Online Games (May 2022 - July 2022)">
                    <div className="listheader">
                        <div className="organization">
                            <a href="https://broadsword.com/" target="_blank" rel="noopener noreferrer">
                                <div className="logocontainer">
                                    <img src="images/broadsword.png" alt="Broadsword Logo" className="logo" />
                                </div>
                                <code className="p name">Broadsword Online Games &#8599;</code>
                            </a>
                        </div>
                    </div>
                    <ul>
                        <li><code className="p">Filler text</code></li>
                    </ul>
                </AccordionItem>
            </AccordionGroup>
        </>,
        <>
            <div><code className="h1">Projects</code></div>
            <AccordionGroup>
                <AccordionItem title="Mini Amazon (September 2024 - November 2024)">
                    <div className="listheader">
                        <code className="p"><a href="https://github.com/giykim/mini-amazon" target="_blank" rel="noopener noreferrer">View repository &#8599;</a></code>
                    </div>
                    <ul>
                        <li><code className="p">Built a full-stack web application with Flask replicating Amazon, including user authentication, product catalog, and shopping cart</code></li>
                        <li><code className="p">Integrated PostgreSQL <strong>database</strong> for managing user accounts, product inventory, and order transactions</code></li>
                        <li><code className="p">Developed responsive UI/UX with HTML, CSS, and JavaScript for seamless user interaction</code></li>
                    </ul>
                    <div className="imgcontainer">
                        <img src="images/amazon.png" alt="Mini Amazon e-commerce project screenshot" />
                    </div>
                </AccordionItem>
                <AccordionItem title="PLTR Trade Strategy (March 2024 - April 2024)">
                    <div className="listheader">
                        <code className="p"><a href="https://github.com/giykim/algo-project" target="_blank" rel="noopener noreferrer">View repository &#8599;</a></code>
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
                </AccordionItem>
            </AccordionGroup>
        </>,
        <>
            <div><code className="h1">Publications</code></div>
            <AccordionGroup>
                <AccordionItem title="Google Scholar">
                    <ul>
                        <li><code className="p">
                            <a href="https://scholar.google.com/citations?user=cUceUnMAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">scholar.google.com &#8599;</a>
                        </code></li>
                    </ul>
                </AccordionItem>
            </AccordionGroup>
        </>,
        <>
            <div><code className="h1">Contact</code></div>
            <AccordionGroup>
                <AccordionItem title="Email">
                    <ul>
                        <li><code className="p"><a href="mailto:giy.kim27@gmail.com">giy.kim27@gmail.com &#8599;</a></code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="LinkedIn">
                    <ul>
                        <li><code className="p"><a href="https://linkedin.com/in/giyoung-kim" target="_blank" rel="noopener noreferrer">linkedin.com/in/giyoung-kim &#8599;</a></code></li>
                    </ul>
                </AccordionItem>
                <AccordionItem title="GitHub">
                    <ul>
                        <li><code className="p"><a href="https://github.com/giykim" target="_blank" rel="noopener noreferrer">github.com/giykim &#8599;</a></code></li>
                    </ul>
                </AccordionItem>
            </AccordionGroup>
        </>,
    ];

    return (
        <div className="content" style={{ height: '100%' }}>
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default About;
