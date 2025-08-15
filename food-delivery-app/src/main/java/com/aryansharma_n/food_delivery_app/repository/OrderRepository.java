package com.aryansharma_n.food_delivery_app.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aryansharma_n.food_delivery_app.entity.*;

import java.util.*;
import java.util.List;



public interface OrderRepository extends JpaRepository<UserOrder, Long>{
    Optional<UserOrder> findById(Long id);
}
