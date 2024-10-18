import React from 'react';
import './starRating.scss'; 

const StarRating = ({ rating }) => {
  const totalStars = 5;
  
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => (
        <i
          key={index}
          className={`fa-solid fa-star ${index < rating ? 'filled' : ''}`}
        ></i>
      ))}
    </div>
  );
};

export default StarRating;
