import { motion } from "framer-motion"
import "./Home.css";

const Home = () => (
    <>
        <div className="content">
            <div className="home-text">
                <p>Welcome to</p>
                <motion.div
                initial={{ opacity: 0, transform: "translateY(20px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <p>My Portfolio</p>
                </motion.div>
            </div>
            <div className="home-narrator">
                <img alt="Image" />
            </div>
        </div>
    </>
);

export default Home