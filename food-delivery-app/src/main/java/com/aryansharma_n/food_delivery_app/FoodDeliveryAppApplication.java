package com.aryansharma_n.food_delivery_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.bind.annotation.*;

@RestController
@SpringBootApplication
// @PropertySource("classpath:application-secret.properties")

public class FoodDeliveryAppApplication {

	@RequestMapping("/")
	String home() {
		return "Hello World!";
	}


	public static void main(String[] args) {
		SpringApplication.run(FoodDeliveryAppApplication.class, args);
	}

	

}
