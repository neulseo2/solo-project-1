/**
 * ************************************
 *
 * @module  MarketsContainer
 * @author
 * @date
 * @description component that renders MessageCreator and MessagesDisplay
 *
 * ************************************
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import MessageCreator from '../components/MessageCreator';
import MessagesDisplay from '../components/MessagesDisplay';

const MessagesContainer = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Create A Message Here</h3>
      <MessageCreator />
			<hr></hr>
      <h3>Display Messages Below</h3>
      <MessagesDisplay />
    </div>
  );
};

export default MessagesContainer;