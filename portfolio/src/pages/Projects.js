import ScrollableSections from "../components/ScrollableSections";
import "./Projects.css";

const Projects = () => {
    const sections = [
        <>
            <div><code class="h1">Mini Amazon</code></div>
            <div class="listheader">
                <code class="p"><a href="https://github.com/giykim/mini-amazon" target="_blank" rel="noopener noreferrer">View repository &#8599;</a></code>
                <code class="p date">September 2024 - November 2024</code>
            </div>
            <ul>
                <li><code class="p">Built a full-stack web application with Flask replicating Amazon, including user authentication, product catalog, and shopping cart</code></li>
                <li><code class="p">Integrated PostgreSQL <strong>database</strong> for managing user accounts, product inventory, and order transactions</code></li>
                <li><code class="p">Developed responsive UI/UX with HTML, CSS, and JavaScript for seamless user interaction</code></li>
            </ul>
            <div class="imgcontainer">
                <img src="images/amazon.png" alt="Project Image" />
            </div>
        </>,
        <>
            <div><code class="h1">Palantir Stock Trading Strategy</code></div>
            <div class="listheader">
                <code class="p"><a href="https://github.com/giykim/algo-project" target="_blank" rel="noopener noreferrer">View repository &#8599;</a></code>
                <code class="p date">March 2024 - April 2024</code>
            </div>
            <ul>
                <li><code class="p">Developed a Dash app to demonstrate a trading strategy focused on Palantir stock</code></li>
                <li><code class="p">Used Selenium for web scraping to gather features for <strong>forecasting</strong> short-term market movements</code></li>
                <li><code class="p">Trained <strong>machine learning</strong> models to predict future stock movements</code></li>
                <li><code class="p">Designed a buy/sell algorithm with performance analysis to filter underperforming trades based on historical data</code></li>
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