package com.aryansharma_n.food_delivery_app.entity;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.persistence.*;
import lombok.*;

@Entity

public class FoodItem {
    
    @Id
    private Long id;
    private String name;

    @Column(nullable = false)
    private double price;

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    public FoodItem() {}
    public FoodItem(Long id, String name) {
        this.id = id;
        this.name = name;
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
    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }



}
