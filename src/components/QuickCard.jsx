import React from 'react';

class QuickCard extends React.Component {
  render() {
    return <div className="quick-card">
      <span className="interrogative-quote">{this.props.interrogative_sentence}</span>
      <span className="eye-catcher">{this.props.eye_catcher_sentence}</span>
      <span className="blurb">{this.props.blurb_sentence}</span>
    </div>;
  }
}

export default QuickCard;
