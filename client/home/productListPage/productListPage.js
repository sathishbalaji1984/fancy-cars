import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCars } from './actions.js';
import Product from './components/product/product';

import styles from './productListPage.css';

class ProductListPage extends Component {
  componentWillMount() {
    this.props.getCars();
  }

  render() {
    const { carsList = [] } = this.props;
    return (
      <div className="list-container">
        <div className="list-page">
          {
            carsList.map(item => <Product car={item} />)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  carsList: state.productList.carsList,
});

const mapDispatchToProps = {
  getCars,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
