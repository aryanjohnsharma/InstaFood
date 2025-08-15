import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContent";


const Header = () => {
  const { cartItems } = useCart();
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem("user")); 
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <h3><Link to="/" style={{ textDecoration: "none", color: "white" }}>InstaFood</Link></h3>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search for Restaurant" />
          <span className="search-icon">🔍</span>
        </div>

        <div className="user-actions">
          {!user ? (
            <>
              <Link to="/login"><p className="p-size">Log in</p></Link>
              <Link to="/signup"><p className="p-size">Sign up</p></Link>
            </>
          ) : (
            <div
                className="dropdown-container"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <p className="p-size dropdown-button">Hi, {user.name.split(" ")[0]} ⬇</p>
                {showDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/profile"><p>Profile</p></Link>
                    <Link to="/orders"><p>My Orders</p></Link>
                    <p onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</p>
                  </div>
                )}
            </div>
          )}

          <Link to="/cart" className="cart-link">
            <p className="p-size">
              🛒 Cart
              {totalCartQuantity > 0 && <span className="cart-badge">{totalCartQuantity}</span>}
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
