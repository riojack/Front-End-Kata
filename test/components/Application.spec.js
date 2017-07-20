import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Application from '../../src/components/Application';
import BannerMenu from '../../src/components/BannerMenu';

describe('ApplicationComponent', () => {
  let props, 
    renderedInstance;

  beforeEach(() => {
    props = {
      banner_props: {
        frame_name: 'foo-frame'
      }
    };
    renderedInstance = shallow(<Application {...props} />);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "application-container"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('application-container');
  });

  describe('BannerMenu child', () => {
    let bannerMenu;

    beforeEach(() => {
      bannerMenu = renderedInstance.children(BannerMenu);
    });

    it('should have a BannerMenu child', () => {
      expect(bannerMenu).to.have.length(1);
    });

    it('should pass props.banner_props to BannerMenu', () => {
      expect(bannerMenu.props()).to.eql(props.banner_props);
    });
  });
});
