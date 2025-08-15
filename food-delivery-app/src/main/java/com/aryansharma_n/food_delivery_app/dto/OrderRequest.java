package com.aryansharma_n.food_delivery_app.dto;
import java.util.*;

import jakarta.persistence.Column;

public class OrderRequest {
    
    private String name;
    private double price;
    private double deliveryFee;
    private double tax;
    private double platformFee;
    private double gstCharges;
    @Column(nullable = false)
    private String email;


    private List<OrderItemDTO> items;

    public OrderRequest(){};
    public OrderRequest(String name, double price , double deliveryFee, double tax){
        this.name = name;
        this.price = price;
        this.deliveryFee = deliveryFee;
        this.tax = tax;
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
    public List<OrderItemDTO> getItems(){
        return items;
    }
    public void setItems(List <OrderItemDTO> items){
        this.items = items;
    }
    public double getPlatformFee() {
        return platformFee;
    }
    public void setPlatformFee(double platformFee) {
        this.platformFee = platformFee;
    }

    public double getGstCharges() {
        return gstCharges;
    }
    public void setGstCharges(double gstCharges) {
        this.gstCharges = gstCharges;
    }
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }


}
