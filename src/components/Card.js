import React from 'react';
import { Link } from 'react-router-dom';

// import { useParams } from 'react-router-dom';
// import data from '../data/data.json';


const Card = ({ id, title, cover }) => {
    return (
        <Link to={`/rental/${id}`} className="card">
            <img src={cover} alt={title} className="imgCard" />

            <div className="overlay">
                <h2>{title}</h2>
            </div>
        </Link>
    );
};

export default Card;
