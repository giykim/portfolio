import ScrollableSections from '../components/ScrollableSections';
import "./Home.css";

const Home = () => {
    const sections = [
        <>
            <div><code className="h1">Welcome to My Portfolio</code></div>
        </>,
    ];

    return (
        <div>
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Home
