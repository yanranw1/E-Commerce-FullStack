import {React,useContext} from 'react'
import { ShopContext } from "../../context/Shop-Context";

export const CartItem = (props) => {
    const {id, name, actual_price, image} = props.data;
    const{ addToCart,cartItems,removeFromCart,updateCartItemCount } = useContext(ShopContext)

    return (
        <div className='cartItem'>
            <img src = {image}/>
            <div className = "Description">
                <p><b>{name}</b></p>
                <p>${actual_price.toFixed(2)}</p>
            </div>
            <div className='countHandler'>
                <button onClick = {() => removeFromCart(id)}>-</button>
                <input value = {cartItems[id]} onChange = {(e) => updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick = {() => addToCart(id)}>+</button>
            </div>
        </div>
    )
}
