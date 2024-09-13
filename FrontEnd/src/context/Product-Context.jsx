import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a ProductContext
export const ProductContext = createContext();

// Create a ProductProvider component that will provide product data
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch product data once when the component mounts
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/product")  // Adjust to your backend API
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);  // Empty array ensures useEffect runs once when the component mounts

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

