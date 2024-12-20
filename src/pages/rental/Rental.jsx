import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/data.json";
import Dropdown from "../../components/dropdown/Dropdown";
import StarRating from "../../components/startRating/StarRating";
import Navbar from "../../components/navbar/Navbar";
import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import "./rental.scss";

const Rental = () => {
    const { id } = useParams();
    const rental = data.find((item) => item.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!rental) {
            navigate("/error");
        }
    }, [rental, navigate]);

    if (!rental) {
        return null;
    }

    return (
        <div>
            <div className="main">
                <Navbar />
                <Carousel pictures={rental.pictures} />
                <section className="info-rental-container">
                    <div className="title-container">
                        <h1>{rental.title}</h1>
                        <h2>{rental.location}</h2>{" "}
                        <div className="tags-container">
                            {rental.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rating-and-host">
                        <div className="host-container">
                            <p>{rental.host.name}</p>
                            <img
                                className="host-img"
                                src={rental.host.picture}
                                alt={rental.host.name}
                            />
                        </div>
                        <StarRating rating={parseInt(rental.rating)} />
                    </div>
                </section>

                <div className="dropdown-container">
                    <Dropdown
                        title="Description"
                        content={rental.description}
                    />

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
            </div>{" "}
            <Footer />
        </div>
    );
};

export default Rental;
