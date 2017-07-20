require('./sass/application.scss');
import Application from './components/Application';

let verbs = {
  ext: {},
  
  setExternals: function(externals) {
    this.ext = Object.assign({}, externals);
  },

  doRender: function() {
    let element = this.ext.react.createElement(Application, {}),
      container = this.ext.doc.getElementById('example-container');

    this.ext.reactdom.render(element, container);
  }
};

export default verbs;
