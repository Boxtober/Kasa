import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';

const Rental = () => {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const rental = data.find(item => item.id === id); // Trouve le logement correspondant

    if (!rental) {
        return <div>Logement non trouvé</div>;
    }

    return (
        <div className="logement">
            <h1>{rental.title}</h1>
            <img src={rental.cover} alt={rental.title} />
            <p>{rental.description}</p>
            {/* Ajoute d'autres informations sur le logement ici */}
        </div>
    );
};

export default Rental;