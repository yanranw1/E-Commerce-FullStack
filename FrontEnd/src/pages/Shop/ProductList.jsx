import React, { useState, useEffect } from "react";
import axios from "axios";

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from Spring Boot backend
        axios.get("http://localhost:8080/api/v1/product")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the products!", error);
            });
    }, []); // Empty dependency array means this will run once after the component mounts

    return (
        <div>
            {products.map(product => (
                <Product key={product.id} data={product} />
            ))}
        </div>
    );
}
