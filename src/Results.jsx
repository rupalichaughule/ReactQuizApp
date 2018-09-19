import React from 'react';

class Results extends React.Component {
  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if (percent > 80) {
      var message = 'awesome!';
    } else if (percent < 80 && percent > 60) {
      var message = 'Good';
    } else {
      var message = 'try';
    }
    return (
      <div className="well">
        <h4>You got {this.props.score} out of {this.props.questions.length}</h4>
        <h2>{percent}% - {message}</h2>
        <a className="btn btn-primary" href="">Take test again</a>
      </div>
    );
  }
}

export default Results;
