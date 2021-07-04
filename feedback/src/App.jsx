import React, { Component } from 'react';


import './App.css';

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    
    return (
      <div >
        <h1>
          Please leave feedback
      </h1>

        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>

        <h2>Statistic</h2>

      <ul className='statistic-list'>
          <li className='statistic-item'>Good: { good }</li>
          <li className='statistic-item'>Neutral: { neutral }</li>
          <li className='statistic-item'>Bad: {bad} </li>
        </ul>
        
      </div>
    
    );
  }
}

export default App;
