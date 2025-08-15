package com.aryansharma_n.food_delivery_app.dto;

public class FoodItemRequest {
    
    private Long id;
    private String name;
    private Long restaurantId;
    private double price;
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public void setPrice(double price){
        this.price = price;
    }
    public double getPrice(){
        return price;
    }

    public Long getRestaurantId() { return restaurantId; }
    public void setRestaurantId(Long restaurantId) { this.restaurantId = restaurantId; }
}
