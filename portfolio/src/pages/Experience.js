import ScrollableSections from "../components/ScrollableSections";
import "./Experience.css";
import Ease from "../components/Ease";

const Experience = () => {
    const sections = [
        <>
            <div><code className="h1">Software Engineer</code></div>
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
        </>
    ];

    return (
        <div className="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Experience
