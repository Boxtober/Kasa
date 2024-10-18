import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data.json";
import Dropdown from "../../components/dropdown/Dropdown";
import StarRating from "../../components/startRating/StarRating";
import Navbar from "../../components/navbar/Navbar";
import "./rental.scss";

//import "../../styles/"
//import "../styles/index.scss";

const Rental = () => {
    const { id } = useParams(); // Récupère l'ID depuis l'URL
    const rental = data.find((item) => item.id === id); // Trouve le logement correspondant
    const navigate = useNavigate();

    // if (!rental) {
    //     return <div>Logement non trouvé</div>;
    // }

    useEffect(() => {
        if (!rental) {
            navigate("/error");
        }
    }, [rental, navigate]);

    if (!rental) {
        return null;
    }

    return (
        <div className="main">
            <Navbar />
            <img
                src={rental.cover}
                alt={rental.title}
                className="rental-banner"
            />

            <section className="info-rental-container">
                <div className="title-container">
                    <h1>{rental.title}</h1>
                    <h2>{rental.location}</h2>
                </div>

                <div className="host-container">
                    <p>{rental.host.name}</p>
                    <img
                        className="host-img"
                        src={rental.host.picture}
                        alt={rental.host.name}
                    />
                </div>
            </section>

            <section className="info-rental-container">
                <div className="tags-container">
                    {rental.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <StarRating rating={parseInt(rental.rating)} />
            </section>

            <div className="dropdown-container">
                <Dropdown title="Description" content={rental.description} />

                <Dropdown
                    title="Équipements"
                    content={
                        <ul>
                            {rental.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
};

export default Rental;
