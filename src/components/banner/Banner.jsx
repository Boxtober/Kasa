import React from "react";
import bannerImg from "../../assets/img/BANNERIMG.jpg";
import "./banner.scss";

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImg} alt="" className="imgBanner" />
            <div className="overlay"></div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
