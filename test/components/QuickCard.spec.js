import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import QuickCard from '../../src/components/QuickCard';

describe('QuickCard component', () => {
  let props, 
    renderedInstance;

  function doRender(props) {
    return shallow(<QuickCard {...props} />);
  }

  beforeEach(() => {
    props = {
      image: 'some.location/image.png',
      interrogative_sentence: 'how now brown cow',
      eye_catcher_sentence: 'whoa-ho, no bro!',
      blurb_sentence: 'foo bar baz'
    };
    renderedInstance = doRender(props);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "quick-card"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('quick-card');
  });

  describe('left or right modes', () => {
    it('should render left mode by default if props.direction_mode is not provided', () => {
      expect(renderedInstance.props()).to.have.property('data-direction-mode')
        .that.equals('left');
    });

    it('should render right mode if props.direction_mode is the value "right"', () => {
      props.direction_mode = 'right';
      renderedInstance = doRender(props);
      expect(renderedInstance.props()).to.have.property('data-direction-mode')
        .that.equals('right');
    });

    it('should render left mode if props.direction_mode is anything other than "left" or "right"', () => {
      props.direction_mode = 'foo';
      renderedInstance = doRender(props);
      expect(renderedInstance.props()).to.have.property('data-direction-mode')
        .that.equals('left');
    });
  });

  describe('children', () => {
    it('should render its children as expected', () => {
      expect(renderedInstance.contains([
        <img src={props.image} />,
        <div className="block-of-quotes">
          <span className="interrogative-quote">{props.interrogative_sentence}</span>
          <span className="eye-catcher">{props.eye_catcher_sentence}</span>
          <span className="blurb">{props.blurb_sentence}</span>
        </div>
      ])).to.equal(true);
    });
  });
});
