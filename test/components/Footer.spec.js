import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Footer from '../../src/components/Footer';

describe('Footer component', () => {
  let props, 
    renderedInstance;

  function doRender(props) {
    return shallow(<Footer {...props} />);
  }

  beforeEach(() => {
    props = {};
    renderedInstance = doRender(props);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "footer"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('footer');
  });

  describe('site map and social links', () => {
    it('should have a div with css class of "site-map-and-social-links" and the expected content', () => {
      let siteAndSocial = renderedInstance.children('.site-map-and-social-links');

      expect(siteAndSocial).to.have.length(1);
      expect(siteAndSocial.type()).to.equal('div');

      expect(siteAndSocial.contains([
        <ul className="site-map">
          <li>About</li>
          <li>What We Do</li>
          <li>How We Do It</li>
          <li>Where We Work</li>
        </ul>,
        <ul className="site-map">
          <li>Portfolio</li>
          <li>Awards</li>
          <li>Careers</li>
        </ul>,
        <ul className="site-map">
          <li>Events</li>
          <li>Contact</li>
        </ul>,
        <ul className="social-links">
          <li className="to-facebook" />
          <li className="to-instagram" />
          <li className="to-linkedin" />
          <li className="to-twitter" />
          <li className="to-youtube" />
        </ul>,
        <span className="copyright">Copyright &copy; 2017 Pillar Technology Group, LLC</span>
      ])).to.equal(true);
    });
  });
});
