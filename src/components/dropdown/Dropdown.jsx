import React, { useState } from "react";
import PropTypes from "prop-types";
import "./dropdown.scss";

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
            <div className="dropdown-toggle">
                <h3>{title}</h3>

                <svg
                    onClick={toggleDropdown}
                    className={`dropdown-icon ${isOpen ? "open" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="14"
                    viewBox="0 0 24 14"
                    fill="none"
                >
                    <path
                        d="M10.7897 0.789692C11.4591 0.120273 12.5462 0.120273 13.2157 0.789692L23.4979 11.072C24.1674 11.7414 24.1674 12.8285 23.4979 13.4979C22.8285 14.1674 21.7414 14.1674 21.072 13.4979L12 4.42598L2.92804 13.4926C2.25862 14.162 1.17148 14.162 0.502064 13.4926C-0.167355 12.8232 -0.167355 11.736 0.502064 11.0666L10.7843 0.784337L10.7897 0.789692Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired, // Validation des props
    content: PropTypes.node.isRequired,
};

export default Dropdown;
