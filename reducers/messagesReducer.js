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
  messageList: [
    {
      name: 'Neul Seo',
      email: 'nseo@gmail.com',
    },
  ],
};

const messagesReducer = (state = initialState, action) => {
  let messageList;

  switch (action.type) {
    case types.ADD_MESSAGE: {
      const newMessage = {
        name: action.payload.name,
        message: action.payload.message,
      };

      messageList = state.messageList.slice();
      messageList.push(newMessage);

      return { ...state, messageList };
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
