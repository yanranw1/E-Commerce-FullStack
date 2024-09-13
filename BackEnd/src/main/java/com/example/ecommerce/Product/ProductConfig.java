package com.example.ecommerce.Product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.CommandLinePropertySource;

import java.util.List;

@Configuration
public class ProductConfig {
//    @Bean
//    CommandLineRunner commandLineRunner(ProductRepository repository){
//        return args -> {
//            Product product1 =new Product(
//                    101,                         // id
//                    "Wireless Headphones",        // name
//                    "Electronics",                // main_category
//                    "Audio",                      // sub_category
//                    "headphones.jpg",             // image
//                    "http://example.com/product", // link
//                    "4.5",                        // ratings
//                    "1500",                       // no_of_ratings
//                    "49.99",                     // discount_price
//                    "79.99"                      // actual_price
//            );
//            Product product2 =new Product(
//                    "Smartphone Case",            // name
//                    "Accessories",                // main_category
//                    "Mobile",                     // sub_category
//                    "smartphone_case.jpg",        // image
//                    "http://example.com/product", // link
//                    "4.7",                        // ratings
//                    "2500",                       // no_of_ratings
//                    "12.99",                     // discount_price
//                    "19.99"                      // actual_price
//            );
//
//            repository.saveAll(
//                    List.of(product1,product2)
//            );
//        };
//    }
}
