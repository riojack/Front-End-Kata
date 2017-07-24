import React from 'react';

class ShoutoutCard extends React.Component {
  componentDidMount() {
    require('../sass/shoutout_card.scss');
  }

  render() {
    return <div className="shoutout-card">
      <span className="first-line">Are you ready to change?</span>
      <span className="noticeable-one-liner">...your industry is.</span>
      <span className="elevator-pitch"><strong>Good thing Pillar's on a first name basis with Technology.</strong><br />In fact, we're a tech company taking marketing and strategy by the horns. Your traditional marketing company talks about integrating technology with these things&mdash;they talk&mdash;but we do it. And we do it better than anyone else.  Because our technology is our game, and our team is made up of the best players.</span>
    </div>;
  }
}

export default ShoutoutCard;
