import React, { Component } from 'react';
import AddToCart from '../addToCart/addToCart';
import styles from './product.css';

class Product extends Component {
  componentWillMount() {
  }

  render() {
    const { car = {} } = this.props;
    return (
      <div className="product">
        <div className="product-details">
          <div className="product_image-container">
            <img src={`assets/images/${car.img}`} />
          </div>
          <div>
            <p>Name: {car.name}</p>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <p>Availability: {car.stockStatus}</p>
          </div>
          <div className="add-to-cart-container">
            <AddToCart stockStatus={car.stockStatus} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
