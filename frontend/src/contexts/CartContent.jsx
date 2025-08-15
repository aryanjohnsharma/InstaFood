import React, {useState, useEffect, createContext, useContext} from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

    const removeFromCart = (itemId) => {
        setCartItems( (prev) => 
          // prev.filter((item) => item.id !== itemId));
        prev.map( (item) =>
          item.id === itemId ?{ ...item, quantity: item.quantity - 1} : item
        ).filter( (item) => item.quantity > 0) )
    };
    const getCartTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const clearCart = () => setCartItems([]);

    return(
        <CartContext.Provider value= { {cartItems, addToCart, removeFromCart, clearCart, getCartTotal, setCartItems}}>
            {children}
        </CartContext.Provider>
    );
};