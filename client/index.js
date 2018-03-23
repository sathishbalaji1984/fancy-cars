import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './common/app/app';
import Store from './Store';

import styles from './assets/css/theme.css';

const store = Store.createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
