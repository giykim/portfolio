import { Children, cloneElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./AccordionItem.css";

export const AccordionGroup = ({ children }) => {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="accordion-group">
            {Children.map(children, (child, index) =>
                cloneElement(child, {
                    isOpen: openIndex === index,
                    onToggle: () => setOpenIndex(openIndex === index ? null : index),
                })
            )}
        </div>
    );
};

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="accordion-item">
            <button className="accordion-header" onClick={onToggle}>
                <code className="p">{title}</code>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="accordion-chevron"
                >
                    <FontAwesomeIcon icon={faChevronDown} />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <div className="accordion-content">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
