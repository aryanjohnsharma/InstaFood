import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./pages_css/signup.css";

const SignupPage = () =>{   
    const[form, setForm] = useState({
        name : "", email : "", mobile : "", city : "", password : "", confirmpassword : ""
    });

    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(form.password !== form.confirmpassword){
            alert("Password does not match!");
            return;
        }
        try{

            const response  = await axios.post("http://localhost:8080/api/signup", {
                name : form.name,
                email : form.email,
                mobile : form.mobile,
                city : form.city,
                password : form.password

            });
            
            alert("Sign Up Successful!");
            console.log(response.data);
            navigate("/");
        }catch(error){
            alert("Signup failed!" + error.response.data);
            console.error(error);
        }
    };

    return(
        <div className="signup-page">
            <div className="signup-container">
             <div className="signup-box">
                <h2>Create Your Account</h2>
                <p>Join us and discover amazing experiences!</p>
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Mobile Number</label>
                    <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>City</label>
                    <input type="text" name="city" value={form.city} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmpassword" value={form.confirmpassword} onChange={handleChange} required />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
                <div className="login-link">
                    Already have an account? <a href="/login">Log In</a>
                </div>
                </form>
            </div>
        </div>
    </div>
    );
};export default SignupPage;