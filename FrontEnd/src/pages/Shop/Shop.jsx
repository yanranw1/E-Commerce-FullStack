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


import React, { useContext } from "react";
import { ProductContext } from "../../context/Product-Context";
import { Product } from "./Product";
import "./Shop.css";

export const Shop = () => {
  const { products, loading } = useContext(ProductContext);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="Shop">
      <div className="ShopTitle">
        <h1>Pottery Shop</h1>
      </div>

      <div className="Products">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
