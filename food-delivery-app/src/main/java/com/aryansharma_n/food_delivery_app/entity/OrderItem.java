package com.aryansharma_n.food_delivery_app.entity;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.*;

@Entity
public class OrderItem {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // private Long OrderId;
    private String itemName;
    private int qty;
    private double price;

    @ManyToOne
    @JoinColumn(name = "order_id")
    @JsonBackReference
    private UserOrder order;


    public OrderItem(){};
    public OrderItem(Long id, String itemName, int qty, double price){
        this.id = id;
        this.itemName = itemName;
        this.qty = qty;
        this.price = price;
    }

    public void setId(Long id){
        this.id = id;
    }
    public long getId(){
        return id;
    }

    public void setQty(int qty){
        this.qty = qty;
    }
    public int getQty(){
        return qty;
    }

    public void setItemName(String itemName){
        this.itemName = itemName;
    }
    public String getItemName(){
        return itemName;
    }
    public void setPrice(double price){
        this.price = price;
    }
    public double getPrice(){
        return price;
    }

    public void setOrder(UserOrder order) {
        this.order = order;
    }

    public UserOrder getOrder() {
        return order;
    }
    


}
