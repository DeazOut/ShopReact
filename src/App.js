import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
        }
      ]
    }
  }
  render() {
    return (
    <div className="wrapper">
      <Header/>
      <Items items={this.state.items}/>
      <Footer/>
    </div>
  );
  }
  
}

export default App;
