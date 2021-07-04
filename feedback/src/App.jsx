import React, { Component } from 'react';


import './App.css';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  // Increment function on buttons
  onBtnClick = nameValue => () => {
    this.setState(prevState => (
      { [nameValue]: prevState[nameValue] + 1 })
    );
  };

  // Count total feedbacks function 
  countTotalFeedback = () => {
    const objValues = Object.values(this.state)
    const totalFeedbacks = objValues.reduce((accum, value) => accum + value)
    return (totalFeedbacks)
  }

  // Count Positive feedbacks function 
  countPositiveFeedbackPercentage = () => {
    const positiveFeedbacks = this.state['good']
    console.log(positiveFeedbacks);

    const totalPositiveFeedbacks = Math.round((positiveFeedbacks / this.countTotalFeedback()) * 100)
    console.log(totalPositiveFeedbacks);

    return (totalPositiveFeedbacks)
  }




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
          {/* Statistic indicators */}
          <li className='statistic-item'>Good: {good}</li>
          <li className='statistic-item'>Neutral: {neutral}</li>
          <li className='statistic-item'>Bad: {bad} </li>

          {/* Statistic methods */}
          <li className='statistic-item'>Total: {this.countTotalFeedback()} </li>
          <li className='statistic-item'>Positive feedbacks: {this.countPositiveFeedbackPercentage()} %</li>
        </ul>

      </div>

    );
  }
}

export default App;
