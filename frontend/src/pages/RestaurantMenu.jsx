import React, {useState, useEffect} from "react";
import axios from "axios";
import { Router, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationBar from '../components/LocationBar';
import "../pages/pages_css/menu.css"
import {useCart} from "../contexts/CartContent"
// import CartPage from './pages/CartPage'
import {Link} from "react-router-dom";
import CartControl from "../components/CartControl";



const RestaurantMenu = () =>{
    const {restaurantId} = useParams();
    const[foodItems, setFoodItems] = useState([]);
    const [restaurantName, setRestaurantName] = useState("");
    const {addToCart} = useCart();

    useEffect(() => {
    axios.get(`http://localhost:8080/food-items/menu/${restaurantId}`)
      .then((res) => {
        setFoodItems(res.data);
      })
      .catch((error) => {
        console.error("Error Fetching Menu: ", error);
      });
  }, [restaurantId]);

    return (
        <div>
            <Header/>
            <LocationBar/>
            {/* <div className="menu-location-bar">
                <div className="location-content">
                <span className="location-icon">📍</span>
                <span>Vijaynagar, Dwarka Nagar, Bengaluru</span>
                </div>
            </div> */}

            <main className="menu-container">
                <div className="menu-header-section">
                <h1 className="menu-title">{restaurantName || "Our Special Combos"}</h1>
                </div>

                <div className="menu-items">
                {foodItems.map((item) => (
                    <div className="menu-item-card" key={item.id}>
                    <div className="item-info">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-price">₹{item.price}</p>
                        <p className="item-description">Delicious combo. Add to cart to enjoy!</p>
                    </div>
                    <div className="item-image-wrapper">

                        <div className="item-image">
                            <img src="/images/image2.jpg" alt={item.name} />
                            {/* <button className="add-button" onClick={() => addToCart(item)}>ADD</button> */}
                        </div>
                            <CartControl item={item}/>  
                        </div>

                    </div>
                ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <Link to="/cart">
                        <button className="checkout-btn">View Cart</button>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};export default RestaurantMenu;