import { Link } from 'react-router-dom';
import ScrollableSections from '../components/ScrollableSections';
import Ease from '../components/Ease';
import "./Home.css";

const Home = () => {
    const sections = [
        <>
            <div>
                <code className="h1">Welcome</code>
            </div>
            <Ease>
                <code className="p">to my portfolio</code>
            </Ease>
        </>,
        <>
            <Link to="/health-assistant"><div><code className="h1">Health Assistant →</code></div></Link>
            <Ease>
                <code className="p">A health assistant that measures your health using Computer Vision</code>
            </Ease>
        </>,
        <>
            <Link to="/steam-scout"><div><code className="h1">Steam Scout →</code></div></Link>
            <Ease>
                <code className="p">An AI tool for those looking for new Steam games</code>
            </Ease>
        </>,
        <>
            <Link to="/about"><div><code className="h1">About →</code></div></Link>
            <Ease>
                <code className="p">Learn a bit about me</code>
            </Ease>
        </>,
    ];

    return (
        <div style={{ height: '100%' }}>
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default Home
