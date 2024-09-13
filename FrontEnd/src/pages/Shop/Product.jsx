import React, { useContext } from "react";
import {ShopContext} from "../../context/Shop-Context"

export const Product = (props) => {
    const {id, name, actual_price, image} = props.data;
    const{ addToCart,cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

    return (
        <div className='Product'>
            <img src = {image}/>
            <div className='Description'>
                <p><b>{name}</b></p>
                <p>${actual_price}</p>
            </div>
            <button className = "addToCartBttn" onClick = {()=>addToCart(id)}>Add To Cart {cartItemAmount > 0 &&<>({cartItemAmount})</> } </button>
        </div>
    )
}
