import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import BannerMenu from '../../src/components/BannerMenu';

describe('Banner Menu Component', () => {
  let renderedInstance;

  function doRender(props) {
    return shallow(<BannerMenu {...props} />);
  }

  beforeEach(() => {
    renderedInstance = doRender({});
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "banner-menu"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('banner-menu');
  });

  describe('company banner and menu', () => {
    it('should have an element with a css class of "company-banner"', () => {
      expect(renderedInstance.contains(<div className="company-banner" />))
        .to.equal(true);
    });
  });

  describe('menu', () => {
    let companyMenu;

    beforeEach(() => { 
      companyMenu = renderedInstance.children('.company-menu');
    });

    it('should have an element with a css class of "company-menu"', () => {
      expect(companyMenu).to.have.length(1);
    });

    it('should have the expected links', () => {
        expect(companyMenu.contains(<ul>
          <li>About</li>
          <li>Work</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Contact</li>
        </ul>)).to.equal(true);
    });
  });

  describe('page banner', () => {
    it('should have an element with a css class of "page-banner"', () => {
      expect(renderedInstance.children('.page-banner'))
        .to.have.length(1);
    });
    
    it('in the page banner, should have two spans with a css class of "small-quote" and "large-quote" for the the first and second respectively', () => {
      let pageBanner = renderedInstance.children('.page-banner');
      
      expect(pageBanner.contains([
        <span className="small-quote">In the past, technology enabled the business.</span>,
        <span className="large-quote">Today, technology is the business.</span>
      ])).to.equal(true);
    });
  });

  describe('page banner frame tracking', () => {
    it('should not have a data-frame-name attribute if props.frame_name is null', () => {
      let pageBanner = renderedInstance.children('.page-banner');

      expect(pageBanner.props()).to.not.have.property('data-frame-name');
    });
    
    it('should set data-frame-name to props.frame_name', () => {
      let props = {
        frame_name: 'foo-frame'
      };
      renderedInstance = doRender(props);

      let pageBanner = renderedInstance.children('.page-banner');

      expect(pageBanner.props()).to.have.property('data-frame-name')
        .that.equals(props.frame_name);
    });
  });
});
