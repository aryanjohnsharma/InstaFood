package com.aryansharma_n.food_delivery_app.dto;
import java.util.*;

public class OrderItemDTO {
    private String name;
    private int qty;
    private double price;

    public OrderItemDTO(){};
    public OrderItemDTO(String name, int qty, double price){
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getName(){
        return name;
    }
    public void setQty(int qty){
        this.qty = qty;
    }
    public int getQty(){
        return qty;
    }
    public void setPrice(double price){
        this.price = price;
    }
    public double getPrice(){
        return price;   
    }

}
