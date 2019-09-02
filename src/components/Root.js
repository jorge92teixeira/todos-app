import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    todos: PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    visibilityFilter: PropTypes.string,
  }).isRequired,
};

export default Root;
