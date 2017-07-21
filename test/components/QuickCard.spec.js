import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import QuickCard from '../../src/components/QuickCard';

describe('QuickCard component', () => {
  let props, 
    renderedInstance;

  beforeEach(() => {
    props = {
      interrogative_sentence: 'how now brown cow',
      eye_catcher_sentence: 'whoa-ho, no bro!',
      blurb_sentence: 'foo bar baz'
    };
    renderedInstance = shallow(<QuickCard {...props} />);
  });

  it('should be a DIV', () => {
    expect(renderedInstance.type()).to.equal('div');
  });

  it('should have a css class of "quick-card"', () => {
    expect(renderedInstance.props()).to.have.property('className')
      .that.equals('quick-card');
  });

  describe('children', () => {
    it('should render its children as expected', () => {
      expect(renderedInstance.contains([
        <span className="interrogative-quote">{props.interrogative_sentence}</span>,
        <span className="eye-catcher">{props.eye_catcher_sentence}</span>,
        <span className="blurb">{props.blurb_sentence}</span>
      ])).to.equal(true);
    });
  });
});
