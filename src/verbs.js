require('./sass/application.scss');
import Application from './components/Application';

let verbs = {
  nouns: {},
  ext: {},

  carouselTimer: null,
  
  setExternals: function(externals) {
    this.ext = Object.assign({}, externals);
  },

  doRender: function() {
    let element = this.ext.react.createElement(Application, {
      banner_props: {
        frame_name: this.nouns.current_frame
      }
    }),
      container = this.ext.doc.getElementById('example-container');

    this.ext.reactdom.render(element, container);
  },

  startCarouselTimer: function() {
    this.nouns.current_frame_index = 0;
    this.carouselTimer = this.ext.timer.repeat(15000, () => {
      if (this.nouns.current_frame_index >= this.nouns.frames.length) {
        this.nouns.current_frame_index = 0;
      }

      this.nouns.current_frame = this.nouns.frames[this.nouns.current_frame_index];

      this.doRender();

      this.nouns.current_frame_index++;
    });
  }
};

export default verbs;
