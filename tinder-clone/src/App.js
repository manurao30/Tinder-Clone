import React from 'react';
import Header from './Header/Header.js';
import TinderCards from './TinderCards/TinderCards.js';
import SwipeButtons from './SwipeButtons/SwipeButtons.js';
import Chats from './Chats/Chats.js';
import ChatScreen from './ChatScreen/ChatScreen.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/chat/:person">
            <Header backButton = "/chat" />
            <ChatScreen />
          </Route>
          <Route path = "/chat">
            <Header backButton = "/"/>
            <Chats />
          </Route>
          <Route path = "/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
