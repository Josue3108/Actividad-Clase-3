import './App.css';

import React from 'react'
import StarWarsPeople from './StarWarsPeople';

export default class App extends React.Component {
  render() {
    return ( //Opens the http and writes it's components.
      <div className="App">
        <StarWarsPeople />
      </div>
    );
  }  
}