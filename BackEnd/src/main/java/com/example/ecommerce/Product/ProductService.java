package com.example.ecommerce.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;
import java.util.OptionalInt;
import java.util.Optional;
@Service
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts(){
        return productRepository.findAll();
    }

    public List<Product>  getProductsByName(String name){
        List<Product> product = productRepository.searchProductByName(name);
        return product;
    }

    public List<Product>  getProductsByCategory(String name){
        List<Product> product = productRepository.findProductByCategory(name);
        return product;
    }

    public List<String>  getCategory(){
        List<String> category = productRepository.getCategory();
        return category;
    }

    public void addNewProduct(Product product) {
        Optional<Product> productByName = productRepository.findProductByName(product.getName());
        if (productByName.isPresent()){
            throw new IllegalStateException("name taken");
        }
        product.setId(null);
        productRepository.save(product);
    }

    public void deleteProduct(Integer productID) {
        boolean exist = productRepository.existsById(productID);
        if (!exist){
            throw new IllegalStateException("Product does not exist");
        }
        System.out.println("111");
        productRepository.deleteById(productID);
    }
}
