import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pages_css/myorders.css"; 
import {useCart} from "../contexts/CartContent";
import { useNavigate } from "react-router-dom";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));

  const { setCartItems } = useCart();  
  const navigate = useNavigate();


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/orders/user/${user.email}`);
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchOrders();
    }
  }, [user?.email]);

  if (!user) {
    return (
      <div className="orders-container">
        <div className="orders-box">
          <h2>Please log in to view your orders</h2>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="orders-container">
        <div className="orders-box">
          <h2>Loading your orders...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <div className="orders-box">
        <h2>My Orders</h2>
        <p className="orders-intro">Here's a history of your past orders.</p>

        <div className="order-list">
          {orders.length === 0 ? (
            <p>You have not placed any orders yet.</p>
          ) : (
            orders.map((order) => {
              const formattedDate = new Date(order.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });

              return (
                <div className="order-card" key={order.id}>
                  <div className="order-header">
                    <span className="order-id">Order ID: #{order.id}</span>
                    <span className="order-date">Placed on: {formattedDate}</span>
                  </div>
                  <div className="order-summary">
                    <p className="items-summary">
                      <span className="item-count">{order.items.length} items</span>:{" "}
                      {order.items.map((item) => item.itemName).join(", ")}
                    </p>
                    <p className="total-amount">Total: <span>₹{(order.price + order.deliveryFee + order.platformFee + order.gstCharges).toFixed(2)}</span></p>
                  </div>
                  <div className="order-actions">
                    {/* <button className="view-details-button">View Details</button> */}
                    
                    <button className="view-details-button" onClick={() => navigate(`/order/${order.id}`)}>
                      View Details
                    </button>


                    
                    {/* <button className="reorder-button">Reorder</button> */}


                    <button className="reorder-button" onClick={() => {
                          const reorderedItems = order.items.map(item => ({
                            name: item.itemName,
                            price: item.price,
                            quantity: item.qty
                          }));

                          setCartItems(reorderedItems);  
                          navigate("/payment");          
                        }}>
                        Reorder
                      </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="back-link">
          <a href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
