import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Яблоко',
          img: './pngimg.com - apple_PNG12507.png',
          desc: 'Яблоко зеленое',
          categore: 'fruits',
          price: '60'
        },
        {
          id: 2,
          title: 'Банан',
          img: './pngimg.com - banana_PNG104249.png',
          desc: 'Банан из Судана',
          categore: 'fruits',
          price: '55'
        },
        {
          id: 3,
          title: 'Груша',
          img: './pngimg.com - pear_PNG3458.png',
          desc: 'Груша',
          categore: 'fruits',
          price: '45'
        },
        {
          id: 4,
          title: 'Абрикос',
          img: './apricot.jpg',
          desc: 'Абрикос',
          categore: 'fruits',
          price: '67'
        },
        {
          id: 5,
          title: 'Персик',
          img: './pngimg.com - peach_PNG4834.png',
          desc: 'Персик',
          categore: 'fruits',
          price: '66'
        },
        {
          id: 6,
          title: 'Персик 2',
          img: './pngimg.com - peach_PNG4834.png',
          desc: 'Персик менее свежий',
          categore: 'fruits',
          price: '63'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
    <div className="wrapper">
      <Header orders={this.state.orders}/>
      <Items items={this.state.items} onAdd = {this.addToOrder}/>
      <Footer/>
    </div>
  );
  }
  
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id == item.id)
        isInArray = true
    }) 
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
