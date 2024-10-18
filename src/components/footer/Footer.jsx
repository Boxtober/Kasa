import React from 'react';
import Logo from '../logo/Logo';
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <Logo color="#ffffff" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;