import React from 'react';
import Navbar from '../components/Navbar';
import aboutImg from '../assets/img/ABOUTIMG.jpg'
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <div className='main'>
                <Navbar />
                <div className="banner">
                    <img src={aboutImg} alt="" className='imgBanner' />
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default About;