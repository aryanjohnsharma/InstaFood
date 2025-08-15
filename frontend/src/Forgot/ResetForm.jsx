import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/emailform.css";

const ResetForm = ({email}) =>{
    const [form, setForm] = useState({
    resetPass: "",
    confirmPass: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.resetPass !== form.confirmPass) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/reset-password", {
        email: email,
        resetPassword: form.resetPass,
        confirmPassword: form.confirmPass
      });
      alert("Password changed successfully!");
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      alert("Failed to change password: " + (error.response?.data || error.message));
    }
  };

    return(
        <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Reset Password</h2>
        <p>Enter your new password below.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="resetPass">New Password</label>
            <input
              type="password"
              id="resetPass"
              name="resetPass"
              placeholder="Enter new password"
              value={form.resetPass}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              type="password"
              id="confirmPass"
              name="confirmPass"
              placeholder="Confirm new password"
              value={form.confirmPass}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="reset-button">Change Password</button>
          <div className="back-to-login">
            <a href="/login">Back to Login</a>
          </div>
        </form>
      </div>
    </div>
    );
};export default ResetForm;