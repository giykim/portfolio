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
                    I'm a recent <strong>Duke University</strong> graduate and software engineer with experience at <strong>Amazon</strong> and a strong foundation in <strong>software engineering</strong>, <strong>machine learning</strong>, and <strong>statistical modeling</strong>.
                    With hands-on experience building full-stack applications, automated workflows, and <strong>interpretable ML models</strong>, I bring expertise in cloud services, CI/CD, and scalable system design.
                    I'm passionate about leveraging AI-driven techniques and contributing to innovative projects in dynamic environments.
                </code>
                <code className="p">
                    Outside of my technical pursuits, I have a passion for weightlifting, gaming, and watches.
                    Some of my favorite shows are <strong>The Simpsons</strong>, <strong>Bojack Horseman</strong>, and <strong>Breaking Bad</strong>.
                    Growing up, I swam and played the piano, and I continually strive to revisit these activities alongside exploring new hobbies.
                    Recently, I've been exploring fashion, running, climbing, and listening to music.
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
            <ul>
                <li><code className="p"><strong>Languages: </strong>Java, Python, JavaScript, C#, C++</code></li>
                <li><code className="p"><strong>Databases: </strong>MongoDB, DynamoDB, PostgreSQL</code></li>
                <li><code className="p"><strong>Cloud &amp; DevOps: </strong>AWS (Lambda, ECS, Step Functions, CloudFormation, CloudWatch), Docker, Git, Azure</code></li>
            </ul>
        </>,
        <>
            <div><code className="h1">Experience</code></div>
            <Ease>
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
                    <li><code className="p">Maintained automated workflows for Product Basket Agreements, Curated Catalogs, and Rebates in a Foundation Services team, enabling partner teams to provision and retrieve commerce documents for <strong>Amazon Business</strong>, serving 8M+ customers with &lt;5 ms precondition lookups.</code></li>
                    <li><code className="p">Built <strong>full-stack capabilities</strong> for an internal tool, enabling partner teams to efficiently search, view, and manage commerce documents.</code></li>
                    <li><code className="p">Authored and presented a Correction of Error (COE) to senior leadership after a marketplace attribution incident, detailing root cause analysis, mitigation steps, and preventive measures.</code></li>
                    <li><code className="p">Designed and deployed <strong>monitoring and alerting</strong> for critical checkout workflows, improving operational reliability and reducing incident response times.</code></li>
                    <li><code className="p">Contributed to <strong>CI/CD</strong> and backend development, supporting APIs that provide the source of truth for partner teams across the business ecosystem.</code></li>
                    <li><code className="p">Explored and applied <strong>AI-driven subagents</strong> and agentic coding techniques to automate development tasks.</code></li>
                </ul>
            </Ease>
        </>,
        <>
            <div><code className="h1">ML Research Assistant</code></div>
            <div>
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
                    <li><code className="p">Designed an <strong>active learning framework</strong> for mammogram segmentation datasets, reducing expert annotation time by 44% through adaptive sampling and uncertainty-driven prioritization.</code></li>
                    <li><code className="p">Implemented a <strong>prototypical network</strong> for breast mass margin analysis, achieving 84% accuracy across 5 lesion types and 83% accuracy for malignancy prediction, with interpretable, similarity-based reasoning.</code></li>
                    <li><code className="p">Developed a prototype-based classification architecture achieving <strong>86% accuracy</strong> on a 200-class, 11,788-sample dataset using attention-guided feature extraction and interpretable decision reasoning.</code></li>
                    <li><code className="p">Built a flexible library for <strong>prototypical-part models</strong>, enabling cross-domain research and rapid experimentation.</code></li>
                </ul>
            </div>
        </>,
        <>
            <div><code className="h1">SWE Intern</code></div>
            <div>
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
                    <li><code className="p">Developed <strong>policy transformation pipelines</strong> to support seamless insurance plan migrations across providers.</code></li>
                    <li><code className="p">Built and deployed <strong>APIs</strong> enabling clients to securely retrieve insurance data by policy-level attributes.</code></li>
                    <li><code className="p">Automated insurance policy processing workflows based on incoming request types, saving <strong>10+ hours per week</strong> across 10+ teams.</code></li>
                    <li><code className="p">Led <strong>quality assurance</strong> efforts across agile teams, ensuring 95% deployment stability by simulating mock insurance plans and events across all pipeline environments.</code></li>
                </ul>
            </div>
        </>,
        <>
            <div><code className="h1">SWE Intern</code></div>
            <div>
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
                    <li><code className="p">Designed a backend <strong>data aggregation pipeline</strong> for <em>Dark Age of Camelot</em>, standardizing data formats and rearchitecting retrieval infrastructure to enable easy access to thousands of item, quest, and entity attributes.</code></li>
                    <li><code className="p">Led the implementation of advanced <strong>item search filtering</strong>, enabling detailed queries across 100+ granular filters.</code></li>
                </ul>
            </div>
        </>,
        <>
            <div><code className="h1">Mini Amazon</code></div>
            <Ease className="information-card">
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
            </Ease>
        </>,
        <>
            <div><code className="h1">PLTR Trade Strategy</code></div>
            <div>
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
            <ul>
                <li><code className="p">
                    <strong>Google Scholar: </strong><a href="https://scholar.google.com/citations?user=cUceUnMAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer">scholar.google.com &#8599;</a>
                </code></li>
            </ul>
        </>,
        <>
            <div><code className="h1">Contact</code></div>
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
        <div className="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default About
