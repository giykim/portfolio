import { Link } from "react-router-dom";
import ScrollableSections from "../components/ScrollableSections";
import "./NoPage.css";
import Ease from "../components/Ease";

const NoPage = () => {
    const sections = [
        <>
            <div><code class="h1">No Page Found</code></div>
            <Ease>
                <code class="p"><Link to="/">Return to Home</Link></code>
            </Ease>
        </>,
    ];

    return (
        <div class="content">
            <ScrollableSections sections={sections} />
        </div>
    )
};

export default NoPage