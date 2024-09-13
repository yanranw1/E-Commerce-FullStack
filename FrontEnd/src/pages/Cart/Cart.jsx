import {React,useContext} from 'react'
import { ShopContext } from "../../context/Shop-Context";
import { PRODUCTS } from "../../product";
import {CartItem} from "./CartItem"
import {useNavigate} from "react-router-dom"
import "./Cart.css"
import { ProductContext } from "../../context/Product-Context";

export const Cart = () => {
    const navigate = useNavigate();
    const{cartItems,getTotalCartAmount} = useContext(ShopContext)
    const{products,loading} = useContext(ProductContext)

    const totalAmount = getTotalCartAmount() 


    return (
      <div className = "cart">
          <div>
              <h1>Your Cart Items</h1>
          </div>
          {totalAmount > 0 ? (
            <div>
              <div className = "cartItems">
                  {products.map((product) => {
                    if (cartItems[product.id] >0) {
                      return <CartItem data = {product}/>
                    }
                  })}
              </div>
              <div className = "checkout">
                <p> Subtotal: ${totalAmount}</p>
                <button onClick = {() => navigate("/")}> Countinue Shopping </button>
                <button> Checkout </button>
              </div>
            </div>
          ):
          (
            <h1>Your Cart is Empty</h1>
          )}
          
      </div>
    )
}
