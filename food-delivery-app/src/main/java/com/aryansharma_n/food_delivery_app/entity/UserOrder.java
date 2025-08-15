package com.aryansharma_n.food_delivery_app.entity;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import java.util.*;
import lombok.*;

@Entity

public class UserOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(nullable = false)
    private String email;


    @Column(nullable =  false)
    private double price;
    private double deliveryFee;
    private double tax;

    @Column(nullable = false)
    private double platformFee;

    @Column(nullable = false)
    private double gstCharges;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<OrderItem> items;


    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt = new Date();

    public UserOrder(){};
    public UserOrder(Long id, String name, double price, double deliveryFee, double tax){
        this.id = id;
        this.name = name;
        this.price = price;
        this.deliveryFee = deliveryFee;
        this.tax = tax;
    }
    public void setId(Long id){
        this.id = id;
    }
    public long getId(){
        return id;
    }
    
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }
    public void setPrice(double price){
        this.price = price;
    }
    public double getPrice(){
        return price;
    }
    public void setDeliveryFee(double deliveryFee){
        this.deliveryFee = deliveryFee;
    }
    public double getDeliveryFee(){
        return deliveryFee;
    }
    public void setTax(double tax){
        this.tax = tax;
    }
    public double getTax(){
        return tax;
    }
    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
    public void setPlatformFee(double platformFee) {
        this.platformFee = platformFee;
    }
    public double getPlatformFee() {
        return platformFee;
    }

    public void setGstCharges(double gstCharges) {
        this.gstCharges = gstCharges;
    }
    public double getGstCharges() {
        return gstCharges;
    }

    public Date getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

}
