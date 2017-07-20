import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ShoutoutCard from '../../src/components/ShoutoutCard';

describe('ShoutoutCard component', () => {
  let props, 
    renderedInstance;

  beforeEach(() => {
    props = {};
    renderedInstance = shallow(<ShoutoutCard {...props} />);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "shoutout-card"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('shoutout-card');
  });

  describe('children', () => {
    it('should have the expected children', () => {
      expect(renderedInstance.contains([
        <span className="first-line">Are you ready to change?</span>,
        <span className="noticeable-one-liner">...your industry is.</span>,
        <span className="elevator-pitch"><strong>Good thing Pillar's on a first name basis with Technology.</strong><br />In fact, we're a tech company taking marketing and strategy by the horns. Your traditional marketing company talks about integrating technology with these things&mdash;they talk&mdash;but we do it. And we do it better than anyone else.  Because our technology is our game, and our team is made up of the best players.</span>
      ])).to.equal(true);
    });
  });
});
