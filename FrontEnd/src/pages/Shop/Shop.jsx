// import React from 'react'
// import {PRODUCTS} from "../../product.js"
// import {Product} from "./Product.jsx"
// import "./Shop.css"
// export const Shop = () => {
//   return (
//     // <div className = "Shop"> <h1>heading</h1> </div>
   
//     <div className = "Shop">
//         <div className = "ShopTitle">
//             <h1>Pottery Shop</h1>
//         </div>

//         <div className="Products">
//           {PRODUCTS.map((product) => (
//             <Product data={product} />
//           ))}
//         </div>
//     </div>  
//     )
// }


import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/Product-Context";
import { Product } from "./Product";
import axios from "axios";
import "./Shop.css";


export const Shop = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <p>Loading products...</p>;
  }

  const [searchQuery, setSearchQuery] = useState(""); // State to track the search input
  const [filteredProducts, setFilteredProducts] = useState(products); // State to hold filtered products
  const [searchLoading, setSearchLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/product/category')  // Adjust the API endpoint if needed
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error('Error fetching categories:', error));
  }, []);
  



  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search
  const handleSearch = () => {
    console.log("searchQuery",searchQuery)
    if (searchQuery) {
      setSearchLoading(true);
      axios
        .get(`http://localhost:8080/api/v1/product/search?name=${searchQuery}`)
        .then((response) => {
          setFilteredProducts(response.data); // Set filtered products from the search result
          setSearchLoading(false);
          console.log(response.data)
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setSearchLoading(false);
        });
    } else {
      setFilteredProducts(products); // Reset to all products if search query is empty
    }
  };

  const handleCategory= (category) => {
    console.log("category",category)
    if (category) {
      setSearchLoading(true);
      axios
        .get(`http://localhost:8080/api/v1/product/category_name?category=${category}`)
        .then((response) => {
          setFilteredProducts(response.data); // Set filtered products from the search result
          setSearchLoading(false);
          console.log(response.data)
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setSearchLoading(false);
        });
    } else {
      setFilteredProducts(products); // Reset to all products if search query is empty
    }
  };
  

  // if (loading || searchLoading) {
  //   return <p>Loading products...</p>;
  // }


  return (
    <div className="Shop">
      <div className="ShopTitle">
        <div className = "CategoryBar">
        {/* <button onClick={handleCategory(category)}>{category}</button> */}
              {categories.map((category)=> (<button className = "category-button" onClick={()=>handleCategory(category)}>{category}</button>))}
        </div>
        <h1>Shop</h1>
      </div>
      {/* Search Input */}
      <div className="SearchBar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products"
        />
        <button className = "search-button" onClick={handleSearch}>Search</button>
      </div>



      <div className="Products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
