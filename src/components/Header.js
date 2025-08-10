import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
        <div>
            <span className='logo'>Перекресток</span>
            <ul className='nav'>
              <li><FaCartShopping className={`shop-cart-button ${cartOpen && 'active'}`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/></li>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>

            {cartOpen && (
              <div className='shop-cart'> 
                  {props.orders.map(el => {
                    <Order></Order>
                  })}
              </div>
            )}

        </div>
        <div className='presentation'>
    
        </div>
    </header>
  )
}
