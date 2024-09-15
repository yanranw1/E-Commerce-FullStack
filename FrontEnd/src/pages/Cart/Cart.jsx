import {React,useContext} from 'react'
import { ShopContext } from "../../context/Shop-Context";
import { PRODUCTS } from "../../product";
import {CartItem} from "./CartItem"
import {useNavigate} from "react-router-dom"
import "./Cart.css"
import { ProductContext } from "../../context/Product-Context";
import {ShoppingCart} from "phosphor-react"

export const Cart = () => {
    const navigate = useNavigate();
    const{cartItems,getTotalCartAmount} = useContext(ShopContext)
    const{products,loading} = useContext(ProductContext)

    const totalAmount = getTotalCartAmount() 


    return (
      <div className = "cart">
          <div className='title'>
              <h2 className='heading'>Your Cart Items</h2>
              <ShoppingCart size = {32}/> 
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
                <p> Subtotal: ${totalAmount.toFixed(2)}</p>
                <button onClick = {() => navigate("/")}> Back </button>
                <button> Checkout </button>
              </div>
            </div>
          ):
          (
            <div>
            <h1>Your Cart is Empty</h1>
            <button onClick = {() => navigate("/")}> Countinue Shopping </button>
            </div>
          )}
          
      </div>
    )
}
