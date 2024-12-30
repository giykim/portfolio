import Ease from "../components/Ease";
import ScrollableSections from "../components/ScrollableSections";
import "./Projects.css";

const Projects = () => {
    const sections = [
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
                    <img src="images/amazon.png" alt="Project Image" />
                </div>
            </Ease>
        </>,
        <>
            <div><code className="h1">Palantir Stock Trading Strategy</code></div>
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
                    <img src="images/palantir.png" alt="Project Image" />
                </div>
            </div>
        </>,
    ]

    return (
        <div className="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Projects