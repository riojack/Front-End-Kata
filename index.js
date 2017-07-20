import React from 'react';
import ReactDOM from 'react-dom';

import verbs from './src/verbs';
import timer from './src/timer';

window.PillarHelpers = {
  timer: timer
};
window.Pillar = Object.assign({}, verbs);
