package com.aryansharma_n.food_delivery_app;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.aryansharma_n.food_delivery_app.entity.*;
import com.aryansharma_n.food_delivery_app.repository.*;

import java.util.*;

@Service
public class FoodItemService {

    
    private FoodItemRepository foodItemRepository;
    private RestaurantRepository restaurantRepository;

    @Autowired
    FoodItemService(FoodItemRepository foodItemRepository, RestaurantRepository restaurantRepository){
        this.foodItemRepository = foodItemRepository;
        this.restaurantRepository = restaurantRepository;
    }

    public void addFoodItem(FoodItem item, Long restaurantId){
        Restaurant restaurant = restaurantRepository.findById(restaurantId).orElseThrow( () -> new RuntimeException("Restaurant not found with id: " + restaurantId) ) ;

        item.setRestaurant(restaurant);
        foodItemRepository.save(item);
    }

    public List<FoodItem> getMenuForRestaurant(Long restaurantId){
        Restaurant restaurant = restaurantRepository.findById(restaurantId).orElseThrow(() -> new RuntimeException("Restaurant not found with id: " + restaurantId));
        return foodItemRepository.findByRestaurant(restaurant);
    }

    
   
}
