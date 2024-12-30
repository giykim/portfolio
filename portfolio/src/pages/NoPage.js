import { Link } from "react-router-dom";
import ScrollableSections from "../components/ScrollableSections";
import "./NoPage.css";
import Ease from "../components/Ease";

const NoPage = () => {
    const sections = [
        <>
            <div><code className="h1">No Page Found</code></div>
            <Ease>
                <code className="p"><Link to="/">Return to Home</Link></code>
            </Ease>
        </>,
    ];

    return (
        <div className="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default NoPage