import React, {useState, useEffect} from "react";
import "./css/emailform.css"
import axios from "axios";

const OtpForm = ({setStep, email}) =>{
    const [otp, setOtp] = useState("");

    const handleVerify = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/api/verify-otp", {
                email: email,
                otp: otp
            });

            console.log(response.data);
            setStep(3);
        }catch(error){
            console.error("OTP Verification failed: ", error.response?.data || error.message);
            alert("Invalid OTP. Please try again");
        }
    };

    return(
        <div className="forgot-password-container">
            <div className="forgot-password-box">
                <h2>Enter OTP</h2>
                <p>We’ve sent a 6-digit OTP to your email. Please enter it below to continue.</p>
                <form action="" onSubmit={handleVerify}>
                    <div className="input-group">
                        <label htmlFor="otp">OTP</label>
                        <input type="number" id="otp" name="otp" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} required/>
                        <button type="submit" className="reset-button">Verify OTP</button>
                        <div className="back-to-login">
                            <a href="/login">Back to Login</a>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}; export default OtpForm;