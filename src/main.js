import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App/index.js';
import rootReducer from './Reducers/root.js';
import { logger, isThereAWinner } from './middlewares.js';

const store = createStore(rootReducer, applyMiddleware(logger, isThereAWinner));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
