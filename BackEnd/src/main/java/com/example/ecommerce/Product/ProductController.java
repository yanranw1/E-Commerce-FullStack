package com.example.ecommerce.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/product")
@CrossOrigin(origins = "http://localhost:5173")  // Allow requests from React app (default port 3000)

public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts(){
        System.out.println("getProducts");
        return productService.getProducts();
    }

    @GetMapping("/search")
    public List<Product> getProductsByName(@RequestParam String name){
        return productService.getProductsByName(name);
    }

    @PostMapping
    public void registerNewProducts(@RequestBody Product product){
        productService.addNewProduct(product);
    }

    @DeleteMapping("/{productID}")
    public void deleteProducts(@PathVariable("productID") Integer productID){
        productService.deleteProduct(productID);
    }

}
