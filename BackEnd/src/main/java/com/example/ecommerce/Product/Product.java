package com.example.ecommerce.Product;

import jakarta.persistence.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Entity
@Table
public class Product {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )

    private Integer id;
    private String  name;
    private String  main_category;
    private String  sub_category;
    private String  image;
    private String  link;
    private float  ratings;
    private Integer  no_of_ratings;
    private float  discount_price;
    private float  actual_price;

    public Product (){
    }

    public Product(Integer id, String name, String main_category, String sub_category, String image, String link, float ratings, Integer no_of_ratings, float discount_price, float actual_price) {
        this.id = id;
        this.name = name;
        this.main_category = main_category;
        this.sub_category = sub_category;
        this.image = image;
        this.link = link;
        this.ratings = ratings;
        this.no_of_ratings = no_of_ratings;
        this.discount_price = discount_price;
        this.actual_price = actual_price;
    }

    public Product(String name, String main_category, String sub_category, String image, String link, float ratings, Integer no_of_ratings, float discount_price, float actual_price) {
        this.name = name;
        this.main_category = main_category;
        this.sub_category = sub_category;
        this.image = image;
        this.link = link;
        this.ratings = ratings;
        this.no_of_ratings = no_of_ratings;
        this.discount_price = discount_price;
        this.actual_price = actual_price;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getMain_category() {
        return main_category;
    }

    public String getSub_category() {
        return sub_category;
    }

    public String getImage() {
        return image;
    }

    public String getLink() {
        return link;
    }

    public float getRatings() {
        return ratings;
    }

    public Integer getNo_of_ratings() {
        return no_of_ratings;
    }

    public float getDiscount_price() {
        return discount_price;
    }

    public float getActual_price() {
        return actual_price;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMain_category(String main_category) {
        this.main_category = main_category;
    }

    public void setSub_category(String sub_category) {
        this.sub_category = sub_category;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setRatings(float ratings) {
        this.ratings = ratings;
    }

    public void setNo_of_ratings(Integer no_of_ratings) {
        this.no_of_ratings = no_of_ratings;
    }

    public void setDiscount_price(float discount_price) {
        this.discount_price = discount_price;
    }

    public void setActual_price(float actual_price) {
        this.actual_price = actual_price;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", main_category='" + main_category + '\'' +
                ", sub_category='" + sub_category + '\'' +
                ", image='" + image + '\'' +
                ", link='" + link + '\'' +
                ", ratings='" + ratings + '\'' +
                ", no_of_ratings='" + no_of_ratings + '\'' +
                ", discount_price='" + discount_price + '\'' +
                ", actual_price='" + actual_price + '\'' +
                '}';
    }

}
