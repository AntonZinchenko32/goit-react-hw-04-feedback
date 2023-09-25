import React, { Component } from 'react';

import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Функція обробки кліку по кнопці, для залишення зворотонього зв'язку ********
  clickHandle = evt => {
    const whatClickedLowerCase = evt.target.textContent.toLowerCase();

    this.setState(state => ({
      [whatClickedLowerCase]: state[whatClickedLowerCase] + 1,
    }));
  };

  // Функція підрахунку суми залишених відгуків
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + bad + neutral;
  };

  // Функці підрахунку відсотку позитивних відгуків серед усіх відгуків
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { bad, good, neutral } = this.state;
    const { clickHandle, countTotalFeedback, countPositiveFeedbackPercentage } =
      this;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={clickHandle}
          />
        </Section>
        {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              bad={bad}
              neutral={neutral}
              good={good}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
