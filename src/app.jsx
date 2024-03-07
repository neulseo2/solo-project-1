/**
 * ************************************
 *
 * @module  App.jsx
 * @description the main component of application
 *
 * ************************************
 */

import React, { Component } from 'react';
import MessagesContainer from '../containers/MessagesContainer';

function App() {
  return (
    <div>
      <MessagesContainer />
    </div>
  );
}

export default App;
