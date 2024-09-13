import React, { useEffect, useState } from 'react';

export const Category = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
    fetch('http://localhost:8080/api/v1/product/category')  // Adjust the API endpoint if needed
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    const handleCategory= (category) => {
        console.log("category",category)
        if (category) {
          setSearchLoading(true);
          axios
            .get(`http://localhost:8080/api/v1/product/category?name=${category}`)
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
    <div className = "Category">
        <div className = "links">
            <Link to="/"> Shop </Link>
            <Link to="/cart"> 
            {categories.map((category)=> (<button onClick={handleSearch(category)}>{category}</button>))}
              <ShoppingCart size = {32}/> 
            </Link>
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
    )
}
