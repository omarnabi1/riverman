import React from 'react';
import './App.css';
import Products from './components/Products';
import data from "./data.json"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",

    }
  }

  render(){
    console.log('this.products')
  return (
    <div className="grid-container">
      <header>
        <a href="/">Riverman Clothes</a>
      </header>
      <main>
      <div className="content">
        <div className="main">
          <Products products={this.state.products}></Products>
        </div>
        <div className="sidebar">Cart Items</div>
      </div>
      </main>
      <footer>All Rights Reserved.</footer>
    </div>
  );
  }
}

export default App;
