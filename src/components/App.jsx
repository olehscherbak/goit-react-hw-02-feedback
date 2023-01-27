import React from 'react';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
    
  feedbackCount = (evt) => {
    this.setState(prevState => ({
      [evt.target.name]: prevState[evt.target.name] + 1,
    }));
  };

  feedbackTotalCount = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  
  feedbackPositivePercentageCount = () => {
    const good = this.state.good;
    const total = this.feedbackTotalCount();
    
    return total > 0 && (Math.round(good / total*100)+"%" );
  }

    render() {
        return (
            <div className="feedback">
                <div className="feedbackControls">
                    <h2 className="title">Please leave feedback</h2>
                    <button type="button" name="good" onClick={this.feedbackCount}>Good</button>
                    <button type="button" name="neutral" onClick={this.feedbackCount}>Neutral</button>
                    <button type="button" name="bad" onClick={this.feedbackCount}>Bad</button>
                </div>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.feedbackTotalCount()}
              positivePercentage={this.feedbackPositivePercentageCount()}
              />
            </div>
        );
    }
}

export default App;