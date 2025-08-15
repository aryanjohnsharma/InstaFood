package com.aryansharma_n.food_delivery_app;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.aryansharma_n.food_delivery_app.entity.*;
import com.aryansharma_n.food_delivery_app.repository.RestaurantRepository;

import java.util.*;


@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    RestaurantService(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    public void addRestaurant(Restaurant restaurant){
        restaurantRepository.save(restaurant);
    }

    public List<Restaurant> getAllRestaurants(){
        return restaurantRepository.findAll();
    }
}
