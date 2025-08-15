import React from "react";
import "./pages_css/profile.css"; // Paste your CSS here

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  // Fallback in case user is not logged in
  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-box">
          <h2>Please Log In</h2>
          <p className="profile-intro">You need to log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>My Profile</h2>
        <p className="profile-intro">View and manage your personal details.</p>

        <div className="profile-details">
          <div className="detail-row">
            <span className="detail-label">Full Name:</span>
            <span className="detail-value">{user.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Email Address:</span>
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Mobile Number:</span>
            <span className="detail-value">{user.mobile}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">City:</span>
            <span className="detail-value">{user.city}</span>
          </div>

          {/* Optional Static or Derived Info (Update if needed) */}
          <div className="detail-row">
            <span className="detail-label">Account Status:</span>
            <span className="detail-value">Active</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Member Since:</span>
            <span className="detail-value">July 2024</span> {/* You can fetch this if stored in DB */}
          </div>
          <div className="detail-row">
            <span className="detail-label">Preferred Cuisine:</span>
            <span className="detail-value">Indian, Italian</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Total Orders:</span>
            <span className="detail-value">--</span> {/* Can fetch dynamically later */}
          </div>
        </div>

        <div className="action-buttons">
          <button type="button" className="edit-profile-button">Edit Profile</button>
          <a href="/" className="back-home-button">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
