import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationBar from "../components/LocationBar";
import { useCart } from "../contexts/CartContent";
import "./pages_css/cartstyle.css";
import { Link } from "react-router-dom";
const CartPage = () => {
    const {cartItems, addToCart, removeFromCart, clearCart} = useCart();
    const [instructions, setInstructions] = useState("");

    const deliveryFee = 40;
    const platformFee = 5;

    const itemTotal = cartItems.reduce(
        (total, item ) => total + item.price * item.quantity, 0
    );

    const taxes = itemTotal * 0.05;
    const total = itemTotal + deliveryFee + platformFee + taxes;

    return(
        <div>
            <Header/>
            <LocationBar/>

            <main className="cart-container">
                <h1 className="cart-title">Your Cart</h1>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ): (
                        cartItems.map( (item) =>(
                            <div className="cart-item" key={item.id}>
                                <div className="item-image">
                                    <img src="/images/image2.jpg" alt="item.name" />
                                </div>
                                <div className="item-details">
                                    <h3 className="item-name">{item.name}</h3>
                                    <p className="item-price">₹{item.price}</p>
                                    <div className="item-quantity">
                                        <button className="quantity-btn minus" onClick={ () => removeFromCart(item.id)}>-</button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button className="quantity-btn plus" onClick={() => addToCart(item)}> + </button>
                                    </div>
                                </div>
                                <button className="remove-item" onClick={() => removeFromCart(item.id)}> x </button>
                            </div>
                        ) )
                    )}
                </div>
                {cartItems.length > 0 &&(
                    <>
                        <div className="bill-summary">
                            <div className="bill-row item-total">
                                <span>Item Total</span>
                                <span className="item-total-amount">₹{itemTotal.toFixed(2)}</span>
                            </div>
                            <div className="bill-row delivery-fee">
                                <span>Delivery Fee</span>
                                <span className="delivery-fee-amount">₹{deliveryFee}</span>
                            </div>
                            <div className="bill-row platform-fee">
                                <span>Platform Fee</span>
                                <span className="platform-fee-amount">₹{platformFee}</span>
                            </div>
                            <div className="bill-row taxes">
                                <span>GST and Restaurant Charges</span>
                                <span className="taxes-amount">₹{taxes.toFixed(2)}</span>
                            </div>
                            <div className="bill-row total">
                                <span>TO PAY</span>
                                <span className="total-amount" >₹{total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="delivery-info">
                            <h3>Delivery Instructions</h3>
                            <textarea name="" id="deliveryInstructions" placeholder="Any delivery instructions..." value={instructions} onChange={(e) => setInstructions(e.target.value)} >
                            </textarea>
                        </div>

                        <div style={{ textAlign: "center", marginTop: "30px" }}>
                            <Link to="/payment">
                                <button className="checkout-btn">Proceed to Payment</button>
                            </Link>
                        </div>
                    </>
                )}
            </main>
            <Footer/>
        </div>
    );

};export default CartPage;
