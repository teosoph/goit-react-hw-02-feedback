import React, { Component } from 'react';


import './App.css';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = nameValue => () => {

    console.log(nameValue);

    this.setState(prevState => (
      { [nameValue]: prevState[nameValue] + 1 })
    );
  };

  render() {
    const { good, neutral, bad } = this.state;
    const objKeys = Object.keys(this.state);


    return (
      <div >
        <h1>
          Please leave feedback
      </h1>

        <div>
          {objKeys.map(objKey => (

            <button
              className='button'
              type="button"
              key={objKey}
              onClick={this.onBtnClick(objKey)}
            >

              {objKey}
      
            </button>
          ))}
        </div>

        <h2>Statistic</h2>

        <ul className='statistic-list'>
          <li className='statistic-item'>Good: {good}</li>
          <li className='statistic-item'>Neutral: {neutral}</li>
          <li className='statistic-item'>Bad: {bad} </li>
        </ul>

      </div>

    );
  }
}

export default App;
