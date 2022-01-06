import React from 'react';
import './App.css';
import data from "./data.json"
import Products from "./components/Products"
//feature 1
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Riverman</a>
        </header>
        <main>
          <div className="content">
            <div className="main"> 
              <Products products={this.state.products}></Products>
             </div>
            <div className="sidebar"> Cart Items </div>
          </div>
        </main>
        <footer>All Rights Reserved</footer>
      </div>
    );
  }
  
}
export default App;
