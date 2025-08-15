package com.aryansharma_n.food_delivery_app.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aryansharma_n.food_delivery_app.entity.*;

import java.util.*;


public interface UserOrderRepository extends JpaRepository<UserOrder, Long> {
    List<UserOrder> findByEmail(String email); 
}
