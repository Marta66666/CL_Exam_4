import React, {Component} from "react";
import ReactDOM from "react-dom";
import ProductList from "./data/products";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenPoducts: [],
    }
  }

  render() {
    return (<>
      <h2> Produkty</h2>
      <ul> {this.props.productList.map(el => <><li>{el.id} {el.name} {el.price}</li> <button className="btn btn-primary"> Kup! </button></>)}
      </ul>
    </>);
  }
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (<><h2> Koszyk</h2>

    </>);
  }
}


class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <>
          <Products productList={this.props.products}/>
          <Cart/>
          </>
    );
  }
}

function App(){
  return <Shop products={ProductList}/>
}
/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));
export {
  App,
  Shop,
  Products,
  Cart
};