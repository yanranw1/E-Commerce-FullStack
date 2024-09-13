package com.example.ecommerce.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product, Integer > {
    @Query("SELECT p FROM Product p where p.name = ?1")
    Optional<Product> findProductByName(String name);

    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Product> searchProductByName(String name);

    @Query("SELECT DISTINCT p.main_category FROM Product p")
    List<String> getCategory();

    @Query("SELECT p FROM Product p where LOWER(p.main_category) LIKE LOWER(CONCAT('%', :name, '%'))")
    List<Product> findProductByCategory(String name);
}
