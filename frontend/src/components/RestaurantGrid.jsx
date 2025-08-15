import React from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantGrid = ({ restaurants }) => (
  <div className="restaurant-grid">
    {restaurants.map((res) => (
      <RestaurantCard key={res.id} restaurant={res} />
    ))}
  </div>
);

export default RestaurantGrid;
