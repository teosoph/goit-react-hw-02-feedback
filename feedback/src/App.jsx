import React, { Component } from 'react';

import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';



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

      // Создай компонент <Section title="">, который рендерит секцию с заголовком и детей (children). Оберни каждый из <Statistics> и <FeedbackOptions> в созданный компонент секции.
      // 
      <div >

        <FeedbackOptions options={objKeys} onLeaveFeedback={onBtnClick()} />
        


        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />


        

      </div>

    );
  }
}

export default App;
