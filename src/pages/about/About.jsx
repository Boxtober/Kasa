import React from "react";
import Navbar from "../../components/navbar/Navbar";
import aboutImg from "../../assets/img/ABOUTIMG.jpg";
import Footer from "../../components/footer/Footer";
import Dropdown from "../../components/dropdown/Dropdown";
import "./about.scss";

const About = () => {
    return (
        <div className="page-container">
            <div className="main">
                <Navbar />
                <div className="banner">
                    <img src={aboutImg} alt="" className="imgBanner" />
                </div>
                <div className="dropdowns-container">
                    <Dropdown
                        title="Fiabilité"
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                    />
                    <Dropdown
                        title="Respect"
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                    />
                    <Dropdown
                        title="Service"
                        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                    />
                    <Dropdown
                        title="Sécurité"
                        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
