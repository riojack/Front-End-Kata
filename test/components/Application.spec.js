import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Application from '../../src/components/Application';

describe('ApplicationComponent', () => {
  let renderedInstance;

  beforeEach(() => {
    renderedInstance = shallow(<Application />);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "application-container"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('application-container');
  });
});
