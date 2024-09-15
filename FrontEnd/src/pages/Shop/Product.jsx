import React, { useContext, useState } from "react";
import {ShopContext} from "../../context/Shop-Context"
import { Link } from "react-router-dom"; // Import the Link component

export const Product = (props) => {
    const {id, name, actual_price, image, ratings,no_of_ratings,link} = props.data;
    const{ addToCart,deleteItem,cartItems,shopownermode } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]

    const [isImageValid, setIsImageValid] = useState(true);

    // Skip rendering the product if the image is invalid
    if (!isImageValid) {
      return null;
    }

    return (
        <div className='Product'>
            <Link to={link}>
                <img 
                    src={image} 
                    alt={name} 
                    onError={() => setIsImageValid(false)} // If image fails, skip rendering this product
                />
            </Link>

            <div className='Description'>
                <Link to={link} style={{ textDecoration: 'none', color: 'black' }}>
                    <p><b>{name}</b></p>
                </Link>
                <p>${actual_price.toFixed(2)} </p>
                <p>★{ratings}  {no_of_ratings} rating</p>
            </div>
            <div>
            {shopownermode?(
                <button className = "deleteBttn" onClick = {()=>deleteItem(id)}>Delete</button>
            ):(
                <button className = "addToCartBttn" onClick = {()=>addToCart(id)}>Add To Cart {cartItemAmount > 0 &&<>({cartItemAmount})</> } </button>
               )}
            </div>
            
            
        </div>
    )
}
