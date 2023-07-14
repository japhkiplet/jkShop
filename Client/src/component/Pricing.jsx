import './pricing.css'
import { useEffect, useState } from 'react';
import PRODUCTS from '../Product';
import Shop  from './Shop';

const Pricing = () => {
   
    return (
        <div className='pricing'>
              <h1>JK-SHOP</h1>
            <div className="pricing-container">
              {
                PRODUCTS.map((product) => (
                  <Shop data={product}/>
                ))
               
              }
            </div>
                  
        </div>
     ); 
}

export default Pricing