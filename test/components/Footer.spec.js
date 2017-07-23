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
});
