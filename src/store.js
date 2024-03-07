/**
 * ************************************
 *
 * @module  store.js
 * @description Redux state
 *
 * ************************************
 */

import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from '../reducers/reducer.js';

// adding composeWithDevTools to get easy access to the Redux dev tools
const store = configureStore(reducers, composeWithDevTools());

export default store;
