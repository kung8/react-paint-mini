import React, { Component } from 'react';
import './App.css';
import PaintCanvas from './component/PaintCanvas';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PaintCanvas />
      </div>
    );
  }
}

export default App;
