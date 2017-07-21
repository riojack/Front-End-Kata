import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Application from '../../src/components/Application';
import BannerMenu from '../../src/components/BannerMenu';
import ShoutoutCard from '../../src/components/ShoutoutCard';
import QuickCard from '../../src/components/QuickCard';

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

  describe('ShoutoutCard child', () => {
    let shoutoutCard;

    beforeEach(() => {
      shoutoutCard = renderedInstance.children(ShoutoutCard);
    });

    it('should have a ShoutoutCard child', () => {
      expect(shoutoutCard).to.have.length(1);
    });
  });

  describe('QuickCard children', () => {
    it('should have 3 QuickCard children', () => {
      expect(renderedInstance.contains([
        <QuickCard 
          image="assets/e-image-1_2017-07-05/e-image-1.png" 
          interrogative_sentence="What We Do" 
          eye_catcher_sentence="Turn your fears into fuel." 
          blurb_sentence="Industries are being disrupted every day.  We create solutions to disrupt your competition before it disrupts you.  Our strategists, technologies and designers collaborate to create software-fueled digital experiences that drive business further." />,
        <QuickCard 
          image="assets/e-image-2_2017-07-05/e-image-2.png" 
          interrogative_sentence="How We Do It" 
          eye_catcher_sentence="Fusion. It's how we bring the heat." 
          blurb_sentence="What is it?  It's the combustion of technology, strategy, innovation, DX and marketing.  It's what delivers the solution to your most difficult business problems." />,
        <QuickCard 
          image="assets/e-image-3_2017-07-05/e-image-3.png" 
          interrogative_sentence="Where We Forge the Future" 
          eye_catcher_sentence="Here, every idea has the ability to turn into a great one." 
          blurb_sentence="A philosophy&mdash;sometimes in four walls, sometimes not.  It's the business strategists, creatives, software artisans and clients collaborating to solve business problems in a no-constraints think tank.  It's where and how we work&mdash;mentally and physicall.  Wherever our work takes us, we bring the Forge mindset with us." />
      ])).to.equal(true);
    });
  });
});
