import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../pages/pages_css/orderconfirm.css"; 

const OrderConfirmationPage = () => {
  const { orderId } = useParams();  
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchOrder = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/orders/${orderId}`);
      const orderData = res.data;
      if (!orderData.items) {
        orderData.items = []; 
      }
      setOrder(orderData);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch order", err);
      setLoading(false);
    }
  };

  fetchOrder();
}, [orderId]);


  if (loading) return <div>Loading...</div>;
  if (!order) return <div>Order not found.</div>;

  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <div className="success-icon">&#10004;</div>
        <h2>Thank you! Your order has been placed.</h2>
        <p className="order-id">Order ID: #{order.id}</p>

        <div className="delivery-info">
          <h3>Estimated Delivery Time</h3>
          <p className="time-estimate">
            Your food will arrive in <span>30–40 minutes</span>.
          </p>
        </div>

        <div className="summary-section">
          <h3>Summary of Items Ordered</h3>
          <div className="order-items-summary">
            {order.items && order.items.length > 0 ? (
              order.items.map((item, index) => (
                <div className="item-summary" key={index}>
                  <span className="item-name-summary">{item.itemName}</span>
                  <span className="item-qty-summary">x {item.qty}</span>
                </div>
              ))
            ) : (
              <p>No items found in this order.</p>
            )}
        </div>
          <div className="total-paid">
            <span>Total Paid:</span>
            <span className="amount">  ₹{(order.price + order.deliveryFee + order.platformFee + order.gstCharges).toFixed(2)}</span>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/" className="home-button">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
