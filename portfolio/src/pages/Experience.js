import "./Experience.css";

const Experience = () => (
    <div className="content">
        <h2>Experience</h2>
        <p><strong>Machine Learning Research Assistant</strong></p>
        <p><a href="https://duke.edu/" target="_blank" rel="noopener noreferrer">Duke University</a></p>
        <ul>
            <li>Researched prototype-based classification using computer vision to boost model performance and interpretability</li>
            <li>Developed an interpretable machine learning model with PyTorch, achieving 86% accuracy on a 200-class dataset (11,788 samples)</li>
            <li>Created an active learning system for mammogram lesion segmentation, reducing expert annotation by 44%</li>
            <li>Building a flexible framework for integrating prototypical-part models, adaptable to various professional domains</li>
        </ul>
        <p><strong>Software Engineering Intern</strong></p>
        <p><a href="https://www.hagerty.com/" target="_blank" rel="noopener noreferrer">Hagerty</a></p>
        <ul>
            <li>Enhanced automated policy and quote generation through agile development, improving system efficiency and reducing errors</li>
            <li>Automated policy processing using C# .NET framework for major clients like State Farm and Liberty Mutual, reducing defects by 14%</li>
            <li>Led QA testing to ensure 99% code stability, collaborating with agile teams and creating mock data to test various scenarios and edge cases</li>
            <li>Created batch processing scripts that reduced manual labor by hours daily, improving operational efficiency and minimizing manual intervention</li>
        </ul>
        <p><strong>Software Engineering Intern</strong></p>
        <p><a href="https://broadsword.com/" target="_blank" rel="noopener noreferrer">Broadsword Online Games</a></p>
        <ul>
            <li>Optimized game data collection and search functionality for Dark Age of Camelot, reducing search times by 30%</li>
            <li>Engineered a C++ and MySQL-based data exporter to integrate game data seamlessly into the website’s database</li>
            <li>Revamped search and filtering for items, quests, and entities, enhancing player access to in-game content</li>
            <li>Improved backend efficiency by refining data aggregation and retrieval, enabling faster, more reliable data handling</li>
        </ul>
    </div>
);

export default Experience