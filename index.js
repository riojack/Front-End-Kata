require('./src/sass/application.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Application from './src/components/Application';

window.Pillar = {
  doRender: function(doc) {
    let element = React.createElement(Application, {});

    ReactDOM.render(element, doc.getElementById('example-container'));
  }
};
