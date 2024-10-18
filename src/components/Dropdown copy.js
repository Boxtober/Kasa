import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState);
    };

    return (

        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <div className="dropdown-toggle" onClick={toggleDropdown}>
                <h3>{title}</h3>

                {/* Icône de flèche SVG */}
                <svg className={`dropdown-icon ${isOpen ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81335 4.50206 9.14393C5.17148 8.47451 6.25862 8.47451 6.92804 9.14393L16 18.2159L25.072 9.14929C25.7414 8.47987 26.8285 8.47987 27.4979 9.14929C28.1674 9.81871 28.1674 10.9058 27.4979 11.5753L17.2157 21.8575L17.2103 21.8522Z" fill="white" />
                </svg>
            </div>
            <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>


        // <div className={`dropdown ${isOpen ? 'open' : ''}`}>

        //     <div className="dropdown-toggle " onClick={toggleDropdown}>
        //         <h3>{title}</h3>

        //         {/* Icône de flèche SVG */}
        //         <svg className={`dropdown-icon ${isOpen ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        //             <path d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81335 4.50206 9.14393C5.17148 8.47451 6.25862 8.47451 6.92804 9.14393L16 18.2159L25.072 9.14929C25.7414 8.47987 26.8285 8.47987 27.4979 9.14929C28.1674 9.81871 28.1674 10.9058 27.4979 11.5753L17.2157 21.8575L17.2103 21.8522Z" fill="white" />
        //         </svg>

        //     </div>
        //     <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        //         <p>{content}</p>
        //     </div>
        // </div>

        // <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        //     <div className="dropdown__toggle" onClick={toggleDropdown}>
        //         {title}

        //         {/* Icône de flèche SVG */}
        //         <svg className={`dropdown__icon ${isOpen ? 'open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
        //             <path d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81335 4.50206 9.14393C5.17148 8.47451 6.25862 8.47451 6.92804 9.14393L16 18.2159L25.072 9.14929C25.7414 8.47987 26.8285 8.47987 27.4979 9.14929C28.1674 9.81871 28.1674 10.9058 27.4979 11.5753L17.2157 21.8575L17.2103 21.8522Z" fill="white" />
        //         </svg>

        //     </div>
        //     <div className="dropdown__content">
        //         {content}
        //     </div>
        // </div>

        // <div className="dropdown">
        //     <button className="dropdown__toggle" onClick={toggleDropdown}>
        //         {title}
        //         <span className={`dropdown__icon ${isOpen ? 'open' : ''}`}>▼</span>
        //     </button>
        //     {isOpen && <div className="dropdown__content">{content}</div>}
        // </div>
    );
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired, // Validation de la prop title
    content: PropTypes.node.isRequired, // Validation de la prop content
};

export default Dropdown;