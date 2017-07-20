import {
  expect
} from 'chai';
import {
  stub,
  spy,
  assert
} from 'sinon';

import Application from '../src/components/Application';
import verbs from '../src/verbs.js';

describe('verbs.js helpers', () => {
  let mockReactElement,
    mockDomElement,
    mockPromise,
    stubReact, stubReactDom, stubDocument,
    stubTimer;

  beforeEach(() => {
    mockReactElement = {
      foo: 'fake react element'
    };
    mockDomElement = {
      bar: 'fake DOM element'
    }
    mockPromise = {
      baz: 'i promise im a promise'
    };

    stubReact = {
      createElement: stub().returns(mockReactElement)
    };
    stubReactDom = {
      render: stub()
    };
    stubDocument = {
      getElementById: stub().returns(mockDomElement)
    };
    stubTimer = {
      repeat: stub()
    };

    verbs.setExternals({
      react: stubReact,
      reactdom: stubReactDom,
      doc: stubDocument,
      timer: stubTimer
    });
  });

  describe('doRender', () => {
    it('should render an Application element', () => {
      verbs.doRender(stubDocument);

      assert.calledWith(stubReact.createElement, Application);
      assert.calledWith(stubReactDom.render, mockReactElement, mockDomElement);
    });
  });

  describe('startCarouselTimer', () => {
    let repeatFirstCallArgs,
      repeatInterval,
      fnToCallRepeatedly,
      
      frames = ['foo_frame', 'bar_frame', 'baz_frame'],
      
      doRenderSpy;

    beforeEach(() => {
      verbs.nouns = {
        frames: frames,
        current_frame: null
      };

      doRenderSpy = spy(verbs, 'doRender');

      verbs.startCarouselTimer();

      repeatFirstCallArgs = stubTimer.repeat.getCall(0).args;
      repeatInterval = repeatFirstCallArgs[0];
      fnToCallRepeatedly = repeatFirstCallArgs[1];
    });

    afterEach(() => {
      doRenderSpy.restore();
    });

    it('should iterate every 15 seconds', () => {
      expect(repeatInterval).to.equal(15000);
    });

    it('should cycle through nouns.frames', () => {
      fnToCallRepeatedly();
      expect(verbs.nouns.current_frame).to.equal(verbs.nouns.frames[0]);
      assert.callCount(doRenderSpy, 1);
      assert.calledWithExactly(stubReact.createElement, Application, {
        banner_props: {
          frame_name: verbs.nouns.frames[0]
        }
      });

      fnToCallRepeatedly();
      expect(verbs.nouns.current_frame).to.equal(verbs.nouns.frames[1]);
      assert.callCount(doRenderSpy, 2);
      assert.calledWithExactly(stubReact.createElement, Application, {
        banner_props: {
          frame_name: verbs.nouns.frames[1]
        }
      });

      fnToCallRepeatedly();
      expect(verbs.nouns.current_frame).to.equal(verbs.nouns.frames[2]);
      assert.callCount(doRenderSpy, 3);
      assert.calledWithExactly(stubReact.createElement, Application, {
        banner_props: {
          frame_name: verbs.nouns.frames[2]
        }
      });

      fnToCallRepeatedly();
      expect(verbs.nouns.current_frame).to.equal(verbs.nouns.frames[0]);
      assert.callCount(doRenderSpy, 4);
      assert.calledWithExactly(stubReact.createElement, Application, {
        banner_props: {
          frame_name: verbs.nouns.frames[0]
        }
      });
    });
  });
});
