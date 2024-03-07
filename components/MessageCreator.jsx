/**
 * ************************************
 *
 * @module  MessageCreator
 * @author
 * @date
 * @description component that takes user input for creating a new message
 *
 * ************************************
 */

import React from 'react';

const MessageCreator = (props) => {
  return (
    <div>
      <h4>Write Wishes Here</h4>
      <div class="msg-box">
        <div class="msg-box-info">
          <input id="input" type="text" placeholder="Name"></input>
          <input id="email" type="email" placeholder="Enter Your Email"></input>
        </div>
        <div class="msg-box-input">
          <input
            id="input"
            type="text"
            placeholder="Write Your Wishes Here"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default MessageCreator;
