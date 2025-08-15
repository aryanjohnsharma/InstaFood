import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./pages_css/login.css";

const LoginPage = () => {
    const[form, setForm] = useState({
        email: "", password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:8080/api/login", {
                email : form.email,
                password: form.password

            });
            alert("Login Successful!");
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");
        }catch(error){
            alert("Login failed: "+ error.response.data);
        }
    };

    return(
        <div className="loginpage">
            <div className="login-container">
                <div className="login-box">
                    <h2>Welcome Back!</h2>
                    <p>Please log in to your account </p>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="Email">Email Address</label>
                            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" required/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" required/>
                        </div>
                        <div className = "samerow">
                            <div className="remember-me">
                                <input type="checkbox" id="remember" name="remember"/>
                                <label htmlFor="">Remember me</label>
                                
                            </div>
                            <a href="/forgotpassword">Forgot Password</a>
                        </div>

                        
                        <button type="submit" className="login-button">Login</button>
                        <div className="signup-link">
                            Dont have an account? <a href="/signup">Sign Up</a>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );

};export default LoginPage;