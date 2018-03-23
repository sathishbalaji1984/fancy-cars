import { combineReducers } from 'redux';
import productListReducer from 'home/productListPage/reducer';

export default combineReducers({
  productList: productListReducer,
});
