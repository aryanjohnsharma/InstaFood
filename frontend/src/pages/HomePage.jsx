import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import LocationBar from '../components/LocationBar';
import RestaurantGrid from '../components/RestaurantGrid';
import Footer from '../components/Footer';
import axios from 'axios';

const HomePage = () =>{
    const[restaurant, setRestaurant] = useState([]);

    useEffect( ()=>{
        axios.get('/restaurant')
        .then(res => setRestaurant(res.data))
        .catch(err => console.error('Error fetching restaurants: ', err));
    } , []);

    return(
        <div>
            
            <Header />
            <LocationBar />
            <div className="main-content">
              <h1 className="section-title">Restaurants in Vijaynagar, Dwarka Nagar</h1>
              <RestaurantGrid restaurants={restaurant} />
            </div>
            <Footer />
        </div>
    );
};export default HomePage;