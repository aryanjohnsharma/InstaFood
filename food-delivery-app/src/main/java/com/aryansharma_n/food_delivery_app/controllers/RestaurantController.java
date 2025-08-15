package com.aryansharma_n.food_delivery_app.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.aryansharma_n.food_delivery_app.RestaurantService;
import com.aryansharma_n.food_delivery_app.entity.Restaurant;

import java.util.*;



@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;


    //to add new restaurants
    @PostMapping 
    public void addRestaurant(@RequestBody Restaurant restaurant){
        restaurantService.addRestaurant(restaurant);
    }
    
    //to get all the restaurants
    @GetMapping
    public List<Restaurant> getAllRestaurants(){
        return restaurantService.getAllRestaurants();
    }
    
}
