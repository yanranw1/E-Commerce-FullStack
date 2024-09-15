import axios from 'axios';
import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../context/Product-Context";
import { Product } from "../Shop/Product";
import {ShopContext} from "../../context/Shop-Context"

export const ShopOwner = () => {
    const { products, loading } = useContext(ProductContext);

    const [passcode, setpasscode] = useState(""); // State to track the search input
    const [authentication, setauthentication] = useState(false); 
    const [searchQuery, setSearchQuery] = useState(""); // State to track the search input
    const [filteredProducts, setFilteredProducts] = useState(products); // State to hold filtered products
    const [searchLoading, setSearchLoading] = useState(false);

    const{ shopownermode,setshopownermode} = useContext(ShopContext)
    const [product, setProduct] = useState({
        name: "",
        main_category: "",
        sub_category: "",
        image: "",
        link: "",
        ratings: "",
        no_of_ratings: "",
        discount_price: "",
        actual_price: "",
      });
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value, // Update the corresponding field in product state
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        axios
          .post("http://localhost:8080/api/v1/product", product) // POST the product data to your backend
          .then((response) => {
            console.log("Product added successfully:", response.data);
            // Clear the form or show a success message
            setProduct({
                              name: "",
              main_category: "",
              sub_category: "",
              image: "",
              link: "",
              ratings: "",
              no_of_ratings: "",
              discount_price: "",
              actual_price: "",
            });
          })
          .catch((error) => {
            console.error("Error adding product:", error);
          });
      };

    const handlePasscodeChange = (e) => {
        setpasscode(e.target.value);
      };
    const handleAuthentication = () => {
        if(passcode==="passcode"){
            setauthentication(true);
            setshopownermode(true);
        }
    };
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

  return (
    <div className='ShopOwner'>
        <h1 className='heading'>Welcome to Shop Owner Management Page</h1>
        {authentication ? (
            <div className='page'> 
                <h2>Authentication Success</h2>
                <div className='add-products'> 
                    <h2>Add Products</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                            <label>Product Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div>
                            <label>Main Category:</label>
                            <input
                                type="text"
                                name="main_category"
                                value={product.main_category}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div>
                            <label>Sub Category:</label>
                            <input
                                type="text"
                                name="sub_category"
                                value={product.sub_category}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div>
                            <label>Image URL:</label>
                            <input
                                type="text"
                                name="image"
                                value={product.image}
                                onChange={handleChange}
                            />
                            </div>
                            <div>
                            <label>Product Link:</label>
                            <input
                                type="text"
                                name="link"
                                value={product.link}
                                onChange={handleChange}
                            />
                            </div>
                            <div>
                            <label>Ratings:</label>
                            <input
                                type="number"
                                step="0.1"
                                name="ratings"
                                value={product.ratings}
                                onChange={handleChange}
                            />
                            </div>
                            <div>
                            <label>Number of Ratings:</label>
                            <input
                                type="number"
                                name="no_of_ratings"
                                value={product.no_of_ratings}
                                onChange={handleChange}
                            />
                            </div>
                            <div>
                            <label>Discount Price:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="discount_price"
                                value={product.discount_price}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <div>
                            <label>Actual Price:</label>
                            <input
                                type="number"
                                step="0.01"
                                name="actual_price"
                                value={product.actual_price}
                                onChange={handleChange}
                                required
                            />
                            </div>
                            <button type="submit">Add Product</button>
                        </form>

                </div>
                <div className='delete-products'> 
                    <h2>Delete Products</h2>
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
            </div>
        ):(
            <div className='authentication-bar'>
                <input className='authentication-input'
                type="text"
                value={passcode}
                onChange={handlePasscodeChange}
                placeholder="Please input your verification passcode"
                />
                <button className = "authentication-button" onClick={handleAuthentication}>Verify</button>
            </div>
        )}


    </div>
        
  )
}
