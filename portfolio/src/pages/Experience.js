import ScrollableSections from "../components/ScrollableSections";
import "./Experience.css";
import Ease from "../components/Ease";

const Experience = () => {
    const sections = [
        <>
            <h1>Machine Learning Research Assistant</h1>
            <Ease>
                <div class="listheader">
                    <div class="organization">
                        <a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">
                            <div class="logocontainer">
                                <img src="images/duke.png" alt="Duke Logo" class="logo" />
                            </div>
                            <p class="name">Duke University &#8599;</p>
                        </a>
                    </div>
                    <p class="date">May 2023 - Present</p>
                </div>
                <ul>
                    <li>Researched prototype-based classification using <strong>computer vision</strong> to boost model performance and interpretability</li>
                    <li>Developed an interpretable machine learning model with <strong>PyTorch</strong>, achieving 86% accuracy on a 200-class dataset (11,788 samples)</li>
                    <li>Created an active learning system for mammogram lesion segmentation, reducing expert annotation by 44%</li>
                    <li>Building a flexible framework for integrating prototypical-part models, adaptable to various professional domains</li>
                </ul>
            </Ease>
        </>,
        <>
            <h1>Software Engineering Intern</h1>
            <div class="listheader">
                <div class="organization">
                    <a href="https://www.hagerty.com/" target="_blank" rel="noopener noreferrer">
                        <div class="logocontainer">
                            <img src="images/hagerty.png" alt="Hagerty Logo" class="logo" />
                        </div>
                        <p class="name">Hagerty &#8599;</p>
                    </a>
                </div>
                <p class="date">May 2024 - August 2024</p>
            </div>
            
            <ul>
                <li>Enhanced automated policy and quote generation through agile development, improving system efficiency and reducing errors</li>
                <li>Automated policy processing using C# .NET framework for major clients like State Farm and Liberty Mutual, reducing defects by 14%</li>
                <li>Led QA testing to ensure 99% code stability, collaborating with agile teams and creating mock data to test various scenarios and edge cases</li>
                <li>Created batch processing scripts that reduced manual labor by hours daily, improving operational efficiency and minimizing manual intervention</li>
            </ul>
        </>,
        <>
            <h1>Software Engineering Intern</h1>
            <div class="listheader">
                <div class="organization">
                    <a href="https://broadsword.com/" target="_blank" rel="noopener noreferrer">
                        <div class="logocontainer">
                            <img src="images/broadsword.png" alt="Broadsword Logo" class="logo" />
                        </div>
                        <p class="name">Broadsword Online Games &#8599;</p>
                    </a>
                </div>
                <p class="date">May 2022 - July 2022</p>
            </div>
            <ul>
                <li>Optimized game data collection and search functionality for Dark Age of Camelot, reducing search times by 30%</li>
                <li>Engineered a C++ and MySQL-based data exporter to integrate game data seamlessly into the website’s database</li>
                <li>Revamped search and filtering for items, quests, and entities, enhancing player access to in-game content</li>
                <li>Improved backend efficiency by refining data aggregation and retrieval, enabling faster, more reliable data handling</li>
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