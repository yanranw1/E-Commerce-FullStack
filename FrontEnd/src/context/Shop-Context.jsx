import {useContext, createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../product";
import { ProductContext } from "./Product-Context";
import axios from "axios";

export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {
  const { products } = useContext(ProductContext); // Fetching products from context
  const [shopownermode, setshopownermode] = useState(false);
  const [cartItems, setCartItems] = useState({}); // Initialize as empty cart


  // Define the function to create the default cart
  const getDefaultCart = () => {
    let cart = {};
    if (products && products.length > 0) {
      for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0;
      }
    } else {
      console.log("products.length", products.length); // Debugging output
    }
    return cart;
  };

  // Update the cartItems state whenever products change
  useEffect(() => {
    if (products && products.length > 0) {
      setCartItems(getDefaultCart());
    }
  }, [products]); // This effect runs whenever `products` changes


  const addToCart = (itemId) => {
    console.log(itemId,"add-to-cart")
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };


  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.actual_price;  // Assuming actual_price is the price field
        }
      }
    }
    return totalAmount;
  };

  const deleteItem = (productID) =>{
    console.log("productID",productID)
    if (productID) {
    axios
        .delete(`http://localhost:8080/api/v1/product/${productID}`)
        .catch((error) => {
        console.error("Error deleting product:", error);
        });
    }
  }
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    deleteItem,
    shopownermode,
    setshopownermode,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};