import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export default {
  createAppStore: (state = {}, history = {}, middlewares = []) => createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
  ),
};
