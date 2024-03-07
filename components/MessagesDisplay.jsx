/**
 * ************************************
 *
 * @module  MessagesDisplay
 * @description component that renders messages on the board
 *
 * ************************************
 */

import React from 'react';
import { useSelector } from 'react-redux';

const MessagesDisplay = (props) => {
  const messagesFromState = useSelector((state) => state.massageList);

  return (
    <div className="msg-display-box">
      <h4>Messages</h4>
      {/* Render messages here */}
      <ul>
        {messagesFromState.map((message, index) => (
          <li key={index}>
            {message.name}: {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
};
