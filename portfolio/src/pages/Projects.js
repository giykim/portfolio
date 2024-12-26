import ScrollableSections from "../components/ScrollableSections";
import "./Projects.css";

const Projects = () => {
    const sections = [
        <>
            <p><strong><a href="https://github.com/giykim/mini-amazon" target="_blank" rel="noopener noreferrer">Mini Amazon &#8599;</a></strong></p>
            <ul>
                <li>Built a full-stack web application with Flask replicating Amazon, including user authentication, product catalog, and shopping cart</li>
                <li>Integrated PostgreSQL for managing user accounts, product inventory, and order transactions</li>
                <li>Developed responsive UI/UX with HTML, CSS, and JavaScript for seamless user interaction</li>
            </ul>
        </>,
        <>
            <p><strong><a href="https://github.com/giykim/algo-project" target="_blank" rel="noopener noreferrer">Palantir Stock Trading Strategy &#8599;</a></strong></p>
            <ul>
                <li>Developed a Dash app to demonstrate a trading strategy focused on Palantir stock</li>
                <li>Used Selenium for web scraping to gather features for forecasting short-term market movements</li>
                <li>Designed a buy/sell algorithm with performance analysis to filter underperforming trades based on historical data</li>
            </ul>
        </>,
    ]

    return (
        <div className="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Projects