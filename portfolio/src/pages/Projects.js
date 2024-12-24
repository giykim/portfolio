import "./Projects.css";

const Projects = () => (
    <div className="content">
        <h2>Projects</h2>
        <p><strong>Mini Amazon</strong></p>
        <ul>
            <li>Built a full-stack web application with Flask replicating Amazon, including user authentication, product catalog, and shopping cart</li>
            <li>Integrated PostgreSQL for managing user accounts, product inventory, and order transactions</li>
            <li>Developed responsive UI/UX with HTML, CSS, and JavaScript for seamless user interaction</li>
        </ul>
        <p><strong>Palantir Stock Trading Strategy</strong></p>
        <ul>
            <li>Developed a Dash app to demonstrate a trading strategy focused on Palantir stock</li>
            <li>Used Selenium for web scraping to gather features for forecasting short-term market movements</li>
            <li>Designed a buy/sell algorithm with performance analysis to filter underperforming trades based on historical data</li>
        </ul>
    </div>
);

export default Projects