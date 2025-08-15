package com.aryansharma_n.food_delivery_app.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aryansharma_n.food_delivery_app.entity.*;

import java.util.*;

public interface FoodItemRepository extends JpaRepository<FoodItem, Long>{

    List<FoodItem> findByRestaurantId(Long restaurantId);
    List<FoodItem> findByRestaurant(Restaurant restaurant);

}
