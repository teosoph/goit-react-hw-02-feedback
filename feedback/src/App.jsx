import React, { Component } from 'react';

import Section from './Components/Section/';
import FeedbackOptions from './Components/FeedbackOptions/';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

// import styles from './App.css';

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
    // console.log(positiveFeedbacks);

    const totalPositiveFeedbacks = Math.round((positiveFeedbacks / this.countTotalFeedback()) * 100)
    // console.log(totalPositiveFeedbacks);

    return (totalPositiveFeedbacks)
  }

  render() {
    const { good, neutral, bad } = this.state;
    const objKeys = Object.keys(this.state);
    const totalFeedback = good + neutral + bad;


    return (
  
      <section >
        
        <Section  title={'Please leave feedback'}>

          <FeedbackOptions 
          options={objKeys}
          onLeaveFeedback={this.onBtnClick} />

      </Section>

        {totalFeedback > 0 ? <Section title={'Statistic'}>

          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} />

        </Section> :           
        
        <Notification message="No feedback given" />
        }


        </section>
    );
  }
}

export default App;
