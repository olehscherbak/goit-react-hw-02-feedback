import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    so: 1,
  };

  feedbackCount = evt => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();

    return total > 0 && Math.round((good / total) * 100) + '%';
  };

  render() {
    return (
      <div className="feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.feedbackCount}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default App;
