import React, { useState, useEffect } from "react";
import "./FloatingImages.css";

const FloatingImages = ({ images }) => {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const container = document.querySelector(".floating-images");
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        const generatePositions = () => {
            const newPositions = Array(images.length).fill().map(() => ({
                top: Math.random() * containerHeight,
                left: Math.random() * containerWidth,
                rotation: Math.random() * 360,
            }));

            setPositions(newPositions);
        };

        generatePositions();

        const interval = setInterval(generatePositions, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-images">
            {positions.map((position, index) => (
                <img
                    key={index}
                    src={`images/picture${index + 1}.png`}
                    alt={`Floating Image ${index + 1}`}
                    className="floating-image"
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        transform: `rotate(${position.rotation}deg)`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingImages;
