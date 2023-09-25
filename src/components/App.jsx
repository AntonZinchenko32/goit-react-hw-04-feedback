import { useState } from 'react';

import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGoodFeedBack] = useState(0);
  const [neutral, setNeutralFeedBack] = useState(0);
  const [bad, setBadFeedBack] = useState(0);

  // Функція обробки кліку по кнопці, для залишення зворотонього зв'язку ********
  const clickHandle = evt => {
    const whatClickedLowerCase = evt.target.textContent.toLowerCase();

    if (whatClickedLowerCase === 'good') setGoodFeedBack(good + 1);
    else if (whatClickedLowerCase === 'neutral')
      setNeutralFeedBack(neutral + 1);
    else setBadFeedBack(bad + 1);
  };

  // Функція підрахунку суми залишених відгуків
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  // Функці підрахунку відсотку позитивних відгуків серед усіх відгуків
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

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
          options={['good', 'neutral', 'bad']}
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
};
