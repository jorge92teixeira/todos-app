/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import configuStore from './configureStore';

const store = configuStore();

render(
  <Root store={store}/>,
  document.getElementById('root'),
);
