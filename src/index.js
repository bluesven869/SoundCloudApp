import './views/styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { appActions } from './core/app';
import history from './core/history';
import configureStore from './core/store';
import mediaQueryRules from './views/media';
import App from './views/app';


const rootElement = document.getElementById('root');
const store = configureStore();


function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Component/>
        </div>
      </Router>
    </Provider>,
    rootElement
  );
}


if (module.hot) {
  module.hot.accept('./views/app', () => {
    render(require('./views/app').default);
  });
}


store.dispatch(appActions.initApp({
  media: mediaQueryRules
}));


render(App);
