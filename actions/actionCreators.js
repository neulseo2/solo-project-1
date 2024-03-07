/**
 * ************************************
 *
 * @module  actionCreators.js
 * @description Action Creators
 *
 * ************************************
 */

// import eventHandlerConstants
import * as types from '../constants/eventHandlerConstants';

// action creator for ADD_MARKET
export const addMessageActionCreator = (newMessage) => ({
  type: types.ADD_MESSAGE,
  payload: newMessage,
});

// action creator for DELETE_CARD
export const deleteMessageActionCreator = (message) => ({
  type: types.DELETE_MESSAGE,
  payload: message,
});
