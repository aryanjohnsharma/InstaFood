import React, {useState, useEffect} from "react";
import axios from "axios";
import { useCart , clearCart} from "../contexts/CartContent";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../pages/pages_css/payment.css"

const PaymentPage = () => {
    const {cartItems, clearCart} = useCart();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

     useEffect(() => {
        if (!user) {
        navigate("/login");
        }
    }, [user, navigate]);

    const itemTotal = cartItems.reduce( (total, item) => total + item.price * item.quantity , 0);
    const deliveryFee = 40;
    const taxes = 35;
    // const totalPay = itemTotal + deliveryFee + taxes;
    const platformFee = 5;
    const gstCharges = itemTotal * 0.05;
    const totalPay = itemTotal + deliveryFee + platformFee + gstCharges;
    


    const handlePayment = async () => {
        
       const payload = {
            name: user.name,
            email: user.email,
            price: itemTotal,
            deliveryFee,
            platformFee,
            gstCharges,
            tax: 0,
            items: cartItems.map(item => ({
                name: item.name,
                qty: item.quantity,
                price: item.price
            }))
        };


        try {
            const res = await axios.post("http://localhost:8080/orders", payload);
            const orderId = res.data;

            clearCart(); 
            navigate(`/order-confirmation/${orderId}`);
        } catch (err) {
            console.error("Order failed", err);
        }
    };

    return(
        <div className="payment-container">
            <div className="payment-box">
                <h2>Your Order Summary</h2>
                <div className="order-items">
                    {cartItems.map( (item) => (
                        <div className="item" key={item.name}>
                            <span className="item-quantity"><p style={{fontWeight: "600", color:"black", marginBottom:"7.5px"}}>{item.quantity}</p></span>
                            <span className="item-name">{item.name}</span>
                            <span className="item-price">₹{item.price * item.quantity}</span>
                        </div>
                    ))}
                </div>

                <div className="bill-details">
                    <div className="bill-row">
                        <span>Item Total</span>
                        <span>₹{itemTotal}</span>
                    </div>
                    <div className="bill-row">
                        <span>Delivery Fee</span>
                        <span>₹{deliveryFee}</span>
                    </div>
                    <div className="bill-row">
                        <span>Platform Fee</span>
                        <span>₹{platformFee}</span>
                    </div>
                    <div className="bill-row">
                        <span>GST & Restaurant Charges</span>
                        <span>₹{gstCharges.toFixed(2)}</span>
                    </div>

                    <div className="bill-row total-row">
                        <span>To Pay</span>
                        <span>₹{totalPay}</span>
                    </div>
                </div>

                <button className="pay-button" onClick={handlePayment}>
                    Proceed to Payment
                </button>
                
                <div className="back-link">
                    <Link to="/">Continue Shopping</Link>
                </div>

            </div>
        </div>
    );


};export default PaymentPage;