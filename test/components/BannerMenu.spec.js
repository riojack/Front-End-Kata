import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import BannerMenu from '../../src/components/BannerMenu';

describe('Banner Menu Component', () => {
  let renderedInstance;

  beforeEach(() => {
    renderedInstance = shallow(<BannerMenu />);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "banner-menu"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('banner-menu');
  });
});
