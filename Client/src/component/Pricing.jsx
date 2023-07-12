import './pricing.css'
import { useEffect, useState } from 'react';

const Pricing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=shoes')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
          setProducts(data.products);
        })
        .catch(error => {
          console.log('Error:', error);
        });
      
    }, []);
    const addToCart = (product) => {
        console.log('Added to cart:', product);
      };
    // console.log(products) 
    //     for (let index = 0; index < products.length; index++) {
    //     console.log(products[index].images[0]);
    // }
    return (
        <div className='pricing'>
              <h1>Pricing</h1>
            <div className="pricing-container">
              {
                products.map(product => (
                  <div key={product.id} className="product-card">
                    <div className='product-left'>
                        <img src={product.images[0]} alt={product.title} className="product-image" />
                        <h2 className="product-title">{product.title}</h2>
                    </div>
                    <div className="product-details">
                      <p className="product-price">Price: <span>{product.price}</span> </p>
                      <p className="product-description">Description: {product.description}</p>
                      <p className="product-category">Category: {product.category}</p>
                      <button className='pricingbtn' onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                  </div>
                ))
              }
            </div>
                  
        </div>
     ); 
}

export default Pricing