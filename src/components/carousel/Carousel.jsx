import React, { useState } from "react";
import "./carousel.scss";

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // img suivante
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    // img precedente
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    if (pictures.length === 1) {
        return (
            <div className="carousel">
                <img
                    src={pictures[0]}
                    alt="Logement"
                    className="carousel-image"
                />
            </div>
        );
    }

    return (
        <div className="carousel">
            <img
                src={pictures[currentIndex]}
                alt={`Logement slide ${currentIndex + 1}`}
                className="carousel-image"
            />

            <button className="carousel-arrow left" onClick={handlePrev}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                >
                    <path
                        d="M47.04 7.78319L39.92 0.703186L0.359985 40.3032L39.96 79.9032L47.04 72.8232L14.52 40.3032L47.04 7.78319Z"
                        fill="white"
                    />
                </svg>
            </button>

            <button className="carousel-arrow right" onClick={handleNext}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="80"
                    viewBox="0 0 48 80"
                    fill="none"
                >
                    <path
                        d="M0.959961 72.3458L8.03996 79.4258L47.64 39.8258L8.03996 0.22583L0.959961 7.30583L33.48 39.8258L0.959961 72.3458Z"
                        fill="white"
                    />
                </svg>
            </button>

            <p className="carousel-counter">
                {currentIndex + 1}/{pictures.length}
            </p>
        </div>
    );
};

export default Carousel;
