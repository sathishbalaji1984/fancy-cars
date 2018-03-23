import React from 'react';
import styles from './addToCart.css';


const AddToCart = ({ stockStatus }) => {
  if (stockStatus !== 'In DealerShip') return false;
  return <button className="add-to-cart">Buy Now</button>;
};

export default AddToCart;
