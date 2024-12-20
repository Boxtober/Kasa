import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import Card from "../../components/cards/Card";
import Footer from "../../components/footer/Footer";
import data from "../../data/data.json";
import "./home.scss";

const Home = () => {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        setRentals(data);
    }, []);

    return (
        <div>
            <div className="main">
                <Navbar />
                <Banner />
                <div>
                    <div className="cards-container">
                        {rentals.map((data) => (
                            <Card
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                cover={data.cover}
                            />
                        ))}
                    </div>
                </div>
            </div>{" "}
            <Footer />
        </div>
    );
};

export default Home;
