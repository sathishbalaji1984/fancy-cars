import React, { Component } from 'react';
import ProductListPage from 'home/productListPage/productListPage';
import Header from 'navigation/header/header';
import Footer from 'navigation/footer/footer';


import styles from './app.css';

class App extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="app">
        <Header />
        <ProductListPage />
        <Footer />
      </div>
    );
  }
}


export default App;
