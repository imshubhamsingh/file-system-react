import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BrowserRouter } from 'react-router-dom';
import Sidebar from '@Components/Sidebar';

import '@Styles/App.scss';

import reducers from '@Reducer';
import { ViewFiles } from '@Pages';

import generatedummyFileSystem from '@Utils/dummyFileSystem';

const rootEl = document.getElementById('root');

const store = createStore(
  reducers,
  {
    fileSystem:
      localStorage.getItem('fileSystem') &&
      Object.keys(localStorage.getItem('fileSystem')).length > 0
        ? JSON.parse(localStorage.getItem('fileSystem'))
        : generatedummyFileSystem()
  },
  composeWithDevTools()
);

const App = () => (
  <Provider store={store}>
    <Router>
      <BrowserRouter>
        <Fragment>
          <Sidebar />
          <ViewFiles />
        </Fragment>
      </BrowserRouter>
    </Router>
  </Provider>
);

const renderComponent = Component => {
  render(<Component />, rootEl);
};

renderComponent(App);
