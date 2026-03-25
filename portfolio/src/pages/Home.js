import { Link } from 'react-router-dom';
import ScrollableSections from '../components/ScrollableSections';
import "./Home.css";

const Home = () => {
    const sections = [
        <>
            <div><code className="h1">Welcome to My Portfolio</code></div>
        </>,
        <>
            <Link to="/health-assistant"><div><code className="h1">Health Assistant →</code></div></Link>
        </>,
        <>
            <Link to="/steam-scout"><div><code className="h1">Steam Scout →</code></div></Link>
        </>,
        <>
            <Link to="/about"><div><code className="h1">About →</code></div></Link>
        </>,
    ];

    return (
        <div style={{ height: '100%' }}>
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Home
