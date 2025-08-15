package com.aryansharma_n.food_delivery_app.entity;

import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Getter
@Setter
public class VerifyUser {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  //easily autoincrement id
    private Long id;

    @Column(unique = true)
    private String email;
    private int otp;

    public VerifyUser(){}
    public VerifyUser(Long id, String email, int otp){
        this.id = id;
        this.email = email;
        this.otp = otp;
    }

    public void setId(Long id){
        this.id = id;
    }
    public Long getId(){
        return id;
    }

    public void setEmail(String email){
        this.email = email;
    }
    public String getEmail(){
        return email;
    }

    public void setOtp(int otp){
        this.otp = otp;
    }
    public int getOtp(){
        return otp;
    }

}
