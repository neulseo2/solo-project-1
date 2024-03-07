import React from 'react';
// import { applyMiddleware } from 'redux';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';

const container = document.getElementById('container');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
