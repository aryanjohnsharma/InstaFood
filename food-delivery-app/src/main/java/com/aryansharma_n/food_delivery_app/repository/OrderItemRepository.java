package com.aryansharma_n.food_delivery_app.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aryansharma_n.food_delivery_app.entity.*;

import java.util.*;


public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{
    // OrderItem findById(Long id);
    Optional<OrderItem> findById(Long id);

}
