import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate(`/restaurant/${restaurant.id}`);

  };

  return(
    <div className="restaurant-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="restaurant-image">
        <img src={restaurant.imageUrl} alt={restaurant.name} />
        <div className="offer-badge">50% OFF</div>
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <p className="restaurant-cuisine">{restaurant.description}</p>
        <div className="restaurant-details">
          <span className="price">₹{restaurant.price} for one</span>
          <span className="delivery-time">{restaurant.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
  
};export default RestaurantCard;