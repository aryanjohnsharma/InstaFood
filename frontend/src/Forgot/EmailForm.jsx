import React, {useState, useEffect} from "react";
import "./css/emailform.css";
import axios from "axios";

const EmailForm = ({ setStep, setEmail }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await axios.post("http://localhost:8080/api/forgot-password", { email });
      console.log(response.data);
      setEmail(email);     
      setStep(2);         
    } catch (error) {
      console.error("Error sending OTP:", error.response?.data || error.message);
      
      alert("Failed to send OTP. Try again.");
    }
  };

  return (
    <div className="forgot-box">
      <div className="forgot-password-container">
        <div className="forgot-password-box">
          <h2>Forgot Your Password?</h2>
          <p>Enter your email address below and we'll send you a link to reset your password.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                // value={email} onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="reset-button">Reset Password</button>
            <div className="back-to-login">
              <a href="/login">Back to Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
