import React from 'react';
import Navbar from '../components/navbar/Navbar';
import aboutImg from '../assets/img/ABOUTIMG.jpg'
import Footer from '../components/footer/Footer';
import Dropdown from '../components/dropdown/Dropdown';

const About = () => {
    return (
        <div>
            <div className='main'>
                <Navbar />
                <div className="banner">
                    <img src={aboutImg} alt="" className='imgBanner' />
                </div>
                <Dropdown title="Description" content="Ceci est un texte en dur à afficher dans le dropdown." />
            </div>
            <Footer />
        </div>
    );
};

export default About;