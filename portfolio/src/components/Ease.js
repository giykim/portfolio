import { motion } from "framer-motion";

const Ease = ({ children }) => {
    return (
        <motion.div
            style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}
            initial={{ opacity: 0, transform: "translateY(20px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export default Ease;