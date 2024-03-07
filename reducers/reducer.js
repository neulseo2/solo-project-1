/**
 * ************************************
 *
 * @module  reducer.js
 * @description a place to combine reducers
 *
 * ************************************
 */

import messagesReducer from './messagesReducer';
import { combineReducers } from 'redux';

// combine reducers
const reducers = combineReducers({
  messages: messagesReducer,
});

export default reducers;
