import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa6'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} Рублей</b>
        <FaTrash className='delete-icon'></FaTrash>
      </div>
    )
  }
}

export default Order