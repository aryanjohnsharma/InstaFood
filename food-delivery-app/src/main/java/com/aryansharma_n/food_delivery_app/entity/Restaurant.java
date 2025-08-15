package com.aryansharma_n.food_delivery_app.entity;

import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.*;
import jakarta.persistence.*;
import lombok.*;

@Entity         //tells spring this class maps to database table
@Getter
@Setter
// @NoArgsConstructor
// @AllArgsConstructor

public class Restaurant {



    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;
    private int price;
    private int deliveryTime;
    private String description;      // e.g., "Pizza, Fast Food, Desserts"
    private String imageUrl;         // path to image
    
    
    @OneToMany(mappedBy = "restaurant")
    private List<FoodItem> foodItem;


    public Restaurant() {}
    public Restaurant(Long id, String name, int price, int deliveryTime, String description, String imageUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.deliveryTime = deliveryTime;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    public void setDescription(String description){
        this.description = description;
    }
     public String getDescription(){
        return description;
    }
    public void setImageUrl(String imageUrl){
        this.imageUrl = imageUrl;
    }
     public String getImageUrl(){
        return imageUrl;
    }
    public void setprice(int price){
        this.price = price;
    }
    public int getPrice(){
        return price;
    }
    public void setDeliveryTime(int deliveryTime){
        this.deliveryTime = deliveryTime;
    }
    public int getDeliveryTime(){
        return deliveryTime;
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
}
