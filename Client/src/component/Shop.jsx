import './pricing.css'
import {ShopContext} from '../context/Context'
import { useContext } from 'react';

const Shop = (props) => {
    const {id,price,title,category,description,image }= props.data;
    const {addToCart , cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
  return (
    <div className="product-card">
        <div className="product-left">
            <img src={image} alt="" />
            <h2>{title}</h2>
        </div>
        <div className="product-details">
            <span>${price}</span>
            <p> category: {category}</p>
            <p>{description}</p>
            <button className="pricingbtn" onClick={ () => addToCart(id)}>
              Add To Cart {cartItemAmount > 0 && <span>({cartItemAmount})</span>}
            </button>
        </div>
    </div>
  )
}

export default Shop