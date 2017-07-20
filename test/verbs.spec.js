import {expect} from 'chai';
import {stub, assert} from 'sinon';

import Application from '../src/components/Application';
import verbs from '../src/verbs.js';

describe('verbs.js helpers', () => {
  let fakeReactElement,
    fakeDomElement,
    stubReact, stubReactDom, stubDocument;

  beforeEach(() => {
    fakeReactElement = {
      foo: 'fake react element'
    };

    fakeDomElement = {
      bar: 'fake DOM element'
    }

    stubReact = {
      createElement: stub().returns(fakeReactElement)
    };
    stubReactDom = {
      render: stub()
    };
    stubDocument = {
      getElementById: stub().returns(fakeDomElement)
    };

    verbs.setExternals({
      react: stubReact,
      reactdom: stubReactDom,
      doc: stubDocument
    });
  });

  describe('doRender', () => {
    it('should render an Application element', () => {
      verbs.doRender(stubDocument);

      assert.calledWith(stubReact.createElement, Application, {});
      assert.calledWith(stubReactDom.render, fakeReactElement, fakeDomElement);
    });
  });
});
