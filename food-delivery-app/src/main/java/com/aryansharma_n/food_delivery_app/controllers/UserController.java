package com.aryansharma_n.food_delivery_app.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.aryansharma_n.food_delivery_app.*;
import com.aryansharma_n.food_delivery_app.entity.*;
import com.aryansharma_n.food_delivery_app.repository.*;

import org.springframework.http.HttpStatus;

import java.util.*;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")  //for react port 
public class UserController {

    // private final VerifyUserRepository verifyUserRepository;
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VerifyUserRepository verifyUserRepository;

    @Autowired
    private EmailService emailService;



    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user){
        if(userRepository.findByEmail(user.getEmail()) != null){
            return ResponseEntity.badRequest().body("Email already exists");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");   
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData){
        String email = loginData.get("email");
        String password = loginData.get("password");

        User user = userRepository.findByEmail(email);

        if(user == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        if(!user.getPassword().equals(password)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
        }
        return ResponseEntity.ok(user);

    }


    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> providedEmail ){
        String email = providedEmail.get("email");

        // User user = userRepository.findByEmail(email);
        
        VerifyUser verifyUser = new VerifyUser();

        double n = Math.random() * (Math.pow(10, 6));
        int otp = (int)n;

        verifyUser.setEmail(email);
        verifyUser.setOtp(otp);

        verifyUserRepository.save(verifyUser);
        emailService.sendOtpEmail(email, otp);


        return ResponseEntity.ok("OTP has been sent to your email id");

    }
    

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> providedData){
        String email = providedData.get("email");
        int otp = Integer.parseInt(providedData.get("otp"));

        VerifyUser verifyUser = verifyUserRepository.findByEmail(email);

        if(verifyUser.getOtp() != otp ){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid OTP");
        }
        return ResponseEntity.ok("User Verified");
    }


    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> passData){
        String email = passData.get("email");
        String resetPass = passData.get("resetPassword");
        String confirmPass = passData.get("confirmPassword");

        User user = userRepository.findByEmail(email);

        if(!resetPass.equals(confirmPass)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Password do not match!");
        }

        user.setPasswordHash(resetPass);
        userRepository.save(user);


         VerifyUser verifyUser = verifyUserRepository.findByEmail(email);
        if (verifyUser != null) {
            verifyUserRepository.deleteAll();
        }
        return ResponseEntity.ok("Password has been changed!");
    }
    
}
