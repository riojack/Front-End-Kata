import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import QuickCard from '../../src/components/QuickCard';

describe('QuickCard component', () => {
  let props, 
    renderedInstance;

  beforeEach(() => {
    props = {};
    renderedInstance = shallow(<QuickCard {...props} />);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "quick-card"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('quick-card');
  });
});
