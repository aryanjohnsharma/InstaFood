package com.aryansharma_n.food_delivery_app.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.aryansharma_n.food_delivery_app.entity.*;

import java.util.*;
import java.util.List;



public interface VerifyUserRepository extends JpaRepository<VerifyUser, Long>{
    // Optional<VerifyUser> findByEmail(String email);
    VerifyUser findByEmail(String email);
    
}
