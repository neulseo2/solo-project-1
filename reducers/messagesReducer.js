/**
 * ************************************
 *
 * @module  messagesReducer.js
 * @description reducer for message data
 *
 * ************************************
 */

import * as types from '../constants/eventHandlerConstants';

const initialState = {
  name: 'Neul Seo',
  email: 'nseo@gmail.com',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
  case types.SUBMIT_MESSAGE: {
    return [...state, action.payload];
  }
  case types.DELETE_MESSAGE: {
    break;
  }
  default: {
    return state;
  }
  }
};

export default messagesReducer;