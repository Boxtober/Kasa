import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import Card from '../components/cards/Card';
import Footer from '../components/footer/Footer';
import data from '../data/data.json';
import Dropdown from '../components/dropdown/Dropdown';

const Home = () => {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        setRentals(data);
    }, []);

    return (
        <div>
            <div className='main'>
                <Navbar />
                <Banner />
                <Dropdown title="Texte en dur">
                    <p>Ceci est un texte en dur à afficher dans le dropdown.</p>
                </Dropdown>
                <div className="cards-container">
                    <div className="home__cards">
                        {rentals.map(data => (
                            <Card
                                key={data.id}
                                id={data.id}
                                title={data.title}
                                cover={data.cover}
                            />
                        ))}
                    </div>
                </div>

            </div> <Footer />
        </div>
    );
};

export default Home;