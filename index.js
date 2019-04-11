import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '@Reducer';
import { FileSystem } from '@Pages';

const rootEl = document.getElementById('root');

const store = createStore(reducers, composeWithDevTools());

const App = () => (
  <Provider store={store}>
    <Router>
      <FileSystem />
    </Router>
  </Provider>
);

const renderComponent = Component => {
  render(<Component />, rootEl);
};

renderComponent(App);
