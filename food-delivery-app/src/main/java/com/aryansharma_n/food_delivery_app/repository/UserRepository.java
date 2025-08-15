package com.aryansharma_n.food_delivery_app.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aryansharma_n.food_delivery_app.entity.*;

import java.util.*;




public interface UserRepository extends JpaRepository<User, Long> {
    // Optional<User> findByEmail(String email);
    User findByEmail(String email);
}
