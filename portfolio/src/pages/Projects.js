import ScrollableSections from "../components/ScrollableSections";
import "./Projects.css";

const Projects = () => {
    const sections = [
        <>
            <h1>Mini Amazon</h1>
            <div class="listheader">
                <p><a href="https://github.com/giykim/mini-amazon" target="_blank" rel="noopener noreferrer">View the repository &#8599;</a></p>
                <p class="date">September 2024 - November 2024</p>
            </div>
            <ul>
                <li>Built a full-stack web application with Flask replicating Amazon, including user authentication, product catalog, and shopping cart</li>
                <li>Integrated PostgreSQL for managing user accounts, product inventory, and order transactions</li>
                <li>Developed responsive UI/UX with HTML, CSS, and JavaScript for seamless user interaction</li>
            </ul>
            <div class="imgcontainer">
                <img src="images/amazon.png" alt="Project Image" />
            </div>
        </>,
        <>
            <h1>Palantir Stock Trading Strategy</h1>
            <div class="listheader">
                <p><a href="https://github.com/giykim/algo-project" target="_blank" rel="noopener noreferrer">View the repository &#8599;</a></p>
                <p class="date">March 2024 - April 2024</p>
            </div>
            <ul>
                <li>Developed a Dash app to demonstrate a trading strategy focused on Palantir stock</li>
                <li>Used Selenium for web scraping to gather features for forecasting short-term market movements</li>
                <li>Designed a buy/sell algorithm with performance analysis to filter underperforming trades based on historical data</li>
            </ul>
            <div class="imgcontainer">
                <img src="images/palantir.png" alt="Project Image" />
            </div>
        </>,
    ]

    return (
        <div class="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Projects