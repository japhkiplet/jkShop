import { useContext } from 'react';
import PRODUCTS from '../Product'
import { ShopContext } from '../context/Context';
import {CartItem} from './CartItem'
import './cart.css'

const Cart = () => {
    const {cartItems} = useContext(ShopContext);

  return (
    <div className="cart-container">
        <div>
            <h1>Your cart items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) =>{
                if(cartItems[product.id] !== 0) {
                    return< CartItem data= {product} />
                }

            })}
        </div>
    </div>
  )
}

export default Cart