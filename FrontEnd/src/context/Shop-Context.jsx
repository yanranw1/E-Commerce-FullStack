import {useContext, createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../product";
import { ProductContext } from "./Product-Context";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const { products } = useContext(ProductContext);
  const [shopownermode, setshopownermode] = useState(false); 

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
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