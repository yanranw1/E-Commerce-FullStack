import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from "phosphor-react"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <div className = "NavBar">
        {/* <div>NavBar</div> */}
        <h1 className='shop-name'>Shopper</h1>
        <div className = "links">
            <Link to="/"> Shop </Link>
            <Link to="/cart"> 
              <ShoppingCart size = {32}/> 
            </Link>
        </div>

    </div>
  )
}
