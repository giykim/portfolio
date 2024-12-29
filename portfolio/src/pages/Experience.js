import ScrollableSections from "../components/ScrollableSections";
import "./Experience.css";
import Ease from "../components/Ease";

const Experience = () => {
    const sections = [
        <>
            <div><code class="h1">ML Research Assistant</code></div>
            <Ease>
                <div class="listheader">
                    <div class="organization">
                        <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                            <div class="logocontainer">
                                <img src="images/duke.png" alt="Duke Logo" class="logo" />
                            </div>
                            <code class="p name">Duke University &#8599;</code>
                        </a>
                    </div>
                    <code class="p date">May 2023 - Present</code>
                </div>
                <ul>
                    <li><code class="p">Researched prototype-based classification using <strong>computer vision</strong> to boost model performance and interpretability</code></li>
                    <li><code class="p">Developed an interpretable machine learning model with <strong>PyTorch</strong>, achieving 86% accuracy on a 200-class dataset (11,788 samples)</code></li>
                    <li><code class="p">Created an active learning system for mammogram lesion segmentation, reducing expert annotation by 44%</code></li>
                    <li><code class="p">Building a flexible framework for integrating prototypical-part models, adaptable to various professional domains</code></li>
                </ul>
            </Ease>
        </>,
        <>
            <div><code class="h1">SWE Intern</code></div>
            <div class="listheader">
                <div class="organization">
                    <a href="https://www.hagerty.com/" target="_blank" rel="noopener noreferrer">
                        <div class="logocontainer">
                            <img src="images/hagerty.png" alt="Hagerty Logo" class="logo" />
                        </div>
                        <code class="p name">Hagerty &#8599;</code>
                    </a>
                </div>
                <code class="p date">May 2024 - August 2024</code>
            </div>
            
            <ul>
                <li><code class="p">Enhanced automated policy and quote generation through <strong>agile development</strong>, improving system efficiency and reducing errors</code></li>
                <li><code class="p">Automated policy processing using C# <strong>.NET</strong> framework for major clients like State Farm and Liberty Mutual, reducing defects by 14%</code></li>
                <li><code class="p">Led <strong>QA testing</strong> to ensure 99% code stability, collaborating with agile teams and creating mock data to test various scenarios and edge cases</code></li>
                <li><code class="p">Created batch processing scripts that reduced manual labor by hours daily, improving operational efficiency and minimizing manual intervention</code></li>
            </ul>
        </>,
        <>
            <div><code class="h1">SWE Intern</code></div>
            <div class="listheader">
                <div class="organization">
                    <a href="https://broadsword.com/" target="_blank" rel="noopener noreferrer">
                        <div class="logocontainer">
                            <img src="images/broadsword.png" alt="Broadsword Logo" class="logo" />
                        </div>
                        <code class="p name">Broadsword Online Games &#8599;</code>
                    </a>
                </div>
                <code class="p date">May 2022 - July 2022</code>
            </div>
            <ul>
                <li><code class="p">Optimized game data collection and search functionality for Dark Age of Camelot, reducing search times by 30%</code></li>
                <li><code class="p">Engineered a C++ and <strong>MySQL</strong>-based data exporter to integrate game data seamlessly into the website's database</code></li>
                <li><code class="p">Revamped search and filtering for items, quests, and entities, enhancing player access to in-game content</code></li>
                <li><code class="p">Improved backend efficiency by refining <strong>data aggregation</strong> and retrieval, enabling faster, more reliable data handling</code></li>
            </ul>
        </>
    ];

    return (
        <div class="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Experience