import React from 'react';

class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad:0,
    }
    
    countGood = () => {
        console.log(this.state.good);
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    countNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };
    
    countBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        return (
            <div className="feedback">
                <div className="feedbackControls">
                    <h2 className="title">Please leave feedback</h2>
                    <button type="button" onClick={this.countGood}>Good</button>
                    <button type="button" onClick={this.countNeutral}>Neutral</button>
                    <button type="button" onClick={this.countBad}>Bad</button>
                </div>
                <div className="statistics">
                    <h2 className="title">Statistics</h2>
                    <span>Good: { this.state.good}</span>
                    <span>Neutral: { this.state.neutral}</span>
                    <span>Bad: { this.state.bad}</span>
                </div>
            </div>
        );
    }
}

export default Feedback;