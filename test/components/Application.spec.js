import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Application from '../../src/components/Application';
import BannerMenu from '../../src/components/BannerMenu';

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

  describe('children', () => {
    it('should have a BannerMenu child', () => {
      expect(renderedInstance.contains(<BannerMenu />))
        .to.equal(true);
    });
  });
});
