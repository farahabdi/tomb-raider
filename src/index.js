import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { initAuth } from './actions/authActions';
import App from './containers/App';
import './styles/index.scss';

const store = configureStore();

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'),
  );
}

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(require('./containers/App').default);
  });
}

initAuth(store.dispatch)
  .then(() => render(App))
  .catch(error => console.error(error));
