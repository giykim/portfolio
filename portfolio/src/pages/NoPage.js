import { Link } from "react-router-dom";
import ScrollableSections from "../components/ScrollableSections";
import "./NoPage.css";
import Ease from "../components/Ease";

const NoPage = () => {
    const sections = [
        <>
            <h1>No Page Found</h1>
            <Ease>
                <p><Link to="/">Return to Home</Link></p>
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