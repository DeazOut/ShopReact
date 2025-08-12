import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';

const showOrders = (props) => {
  return ( <div>{props.orders.map(el => (
                    <Order key={el.id} item={el}/>
                  ))}</div>) 
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Корзина пустая</h2>
    </div>
  )
}

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
                  {props.orders.lenght > 0 ? showOrders(props) : showNothing()}                 
              </div>
            )}

        </div>
        <div className='presentation'>
    
        </div>
    </header>
  )
}
