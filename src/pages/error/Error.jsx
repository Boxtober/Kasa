import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./error.scss";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="main">
                <Navbar />
                <section className="error-container">
                    <p className="error-404">404</p>
                    <p className="error-txt">
                        Oups! La page que vous demandez n'existe pas.
                    </p>

                    <Link to="/" className="error-link">
                        Retourner sur la page d’accueil
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Error;
