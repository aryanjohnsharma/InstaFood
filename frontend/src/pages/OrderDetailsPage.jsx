import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./pages_css/orderdetails.css";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/orders/${id}`);
        setOrder(res.data);
      } catch (err) {
        console.error("Failed to fetch order", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="order-details-container">
        <div className="order-details-box">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="order-details-container">
        <div className="order-details-box">
          <h2>Order Not Found</h2>
        </div>
      </div>
    );
  }

  const totalPaid =
    order.price + order.deliveryFee + order.platformFee + order.gstCharges;

  return (
    <div className="order-details-container">
      <div className="order-details-box">
        <h2>Order Details</h2>
        <p className="order-details-intro">Here are the full details of your order.</p>

        <div className="order-info-section">
          <div className="info-row">
            <span className="info-label">Order ID:</span>
            <span className="info-value">#{order.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Placed On:</span>
            <span className="info-value">
              {new Date(order.createdAt).toLocaleString("en-IN")}
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Delivery Address:</span>
            <span className="info-value">Vijaynagar, Dwarka Nagar, Bengaluru</span> {/* You can make this dynamic later */}
          </div>
          <div className="info-row">
            <span className="info-label">Payment Method:</span>
            <span className="info-value">Online Payment</span>
          </div>
          <div className="info-row">
            <span className="info-label">Delivery Status:</span>
            <span className="info-value status-delivered">Delivered</span>
          </div>
        </div>

        <div className="items-breakdown-section">
          <h3>Items in Your Order</h3>
          <div className="item-list">
            {order.items.map((item, index) => (
              <div className="item-detail-row" key={index}>
                <span className="item-name">{item.itemName}</span>
                <span className="item-qty">x {item.qty}</span>
                <span className="item-price">₹{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bill-summary-section">
          <h3>Bill Summary</h3>
          <div className="bill-row">
            <span>Item Total</span>
            <span>₹{order.price.toFixed(2)}</span>
          </div>
          <div className="bill-row">
            <span>Delivery Fee</span>
            <span>₹{order.deliveryFee.toFixed(2)}</span>
          </div>
          <div className="bill-row">
            <span>Platform Fee</span>
            <span>₹{order.platformFee.toFixed(2)}</span>
          </div>
          <div className="bill-row">
            <span>GST Charges</span>
            <span>₹{order.gstCharges.toFixed(2)}</span>
          </div>
          <div className="bill-row total-row">
            <span>Total Paid</span>
            <span>₹{totalPaid.toFixed(2)}</span>
          </div>
        </div>

        <div className="action-buttons">
          <Link to="/orders" className="back-to-orders-button">
            Back to My Orders
          </Link>
          <Link to="/" className="home-button">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
