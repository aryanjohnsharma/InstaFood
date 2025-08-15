import React, {useState, useEffect} from "react";
import axios from "axios";
import EmailForm from "../Forgot/EmailForm";
import OtpForm from "../Forgot/OtpForm";
import ResetForm from "../Forgot/ResetForm";


const ForgotPasswordPage = () =>{
    const[step, setStep] = useState(1); // 1: email, 2: otp, 3: reset
    const[email, setEmail] = useState("");

    return(
        <div className="forgot-container">
            {step == 1 && <EmailForm setStep= {setStep} setEmail = {setEmail} />}
            {step === 2 && <OtpForm setStep={setStep} email={email} />}
            {step === 3 && <ResetForm email={email} />}
        </div>
    );

};export default ForgotPasswordPage;
