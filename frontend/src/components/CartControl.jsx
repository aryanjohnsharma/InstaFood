import React, {useState, useEffect} from "react";
import axios from "axios";
import { useCart } from "../contexts/CartContent";


const CartControl = ({item}) =>{
    const {cartItems, addToCart, removeFromCart} = useCart();

    const cartItem = cartItems.find( (ci) => ci.id === item.id);

    const btnStyle = {
        padding: "4px 10px",
        backgroundColor: "#cb202d",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        cursor: "pointer"
    };

    const addBtnStyle = {
    ...btnStyle,
    padding: "8px 20px",
    };

    return (
        <div style={ {marginTop : "10px", display : "flex" , justifyContent: "center" }}>
            {cartItem ?(
                <div style={{display: "flex" , alignItems: "center", gap:"10px"}}>
                    <button onClick={() => removeFromCart(item.id)} style={btnStyle}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={ () => addToCart(item)} style={btnStyle}>+</button>
                </div>
            ): (
                <button onClick={ () => addToCart(item)} style={addBtnStyle}>ADD</button>
            )

            }
        </div>
    );
    
};export default CartControl;