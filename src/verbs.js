require('./sass/application.scss');
import Application from './components/Application';

let verbs = {
  doRender: function(doc) {
    let element = React.createElement(Application, {});

    ReactDOM.render(element, doc.getElementById('example-container'));
  }
};

export default verbs;
