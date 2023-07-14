import { useContext } from 'react';
import './pricing.css'
import { ShopContext } from '../context/Context';

export const CartItem = (props) => {
    const {id,price,title,category,description,image }= props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

  return (
    <div className="product-card1">
        <div className="product-left">
            <img src={image} alt="" />
            <h2>{title}</h2>
        </div>
        <div className="product-details">
            <span>${price}</span>
            <p> category: {category}</p>
            <p>{description}</p>
            <div className="counthandler">
              <button onClick={()=> removeFromCart(id)}>-</button>
              <input value={cartItems[id]} />
              <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

