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
});
