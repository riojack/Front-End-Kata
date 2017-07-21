import React from 'react';

function getDirectionMode(props) {
  return props.direction_mode === 'right' ? 'right' : 'left';
}

class QuickCard extends React.Component {
  render() {
    return <div className="quick-card" data-direction-mode={getDirectionMode(this.props)}>
      <img src={this.props.image} />
      <div className="block-of-quotes">
        <span className="interrogative-quote" style={{color: this.props.interrogative_color}}>{this.props.interrogative_sentence}</span>
        <span className="eye-catcher">{this.props.eye_catcher_sentence}</span>
        <span className="blurb">{this.props.blurb_sentence}</span>
      </div>
    </div>;
  }
}

export default QuickCard;
