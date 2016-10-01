import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import 'todomvc-app-css/index.css'

import { createCaptureMiddleware, createPersistHandler, createRetrieveHandler, createRetrieveMiddleware, createReplayMiddleware, wrapReducer } from 'redux-vcr';

const firebaseAuth = {
  apiKey: "AIzaSyBklunZBwf0YMFbpHWVmfcu2scFAb2gq3o",
  authDomain: "todomvc-ccb8e.firebaseapp.com",
  databaseURL: "https://todomvc-ccb8e.firebaseio.com",
};

const persistHandler = createPersistHandler({ firebaseAuth });
const retrieveHandler = createRetrieveHandler({ firebaseAuth });

const middlewares = [
  createCaptureMiddleware({ persistHandler }),
  createRetrieveMiddleware({ retrieveHandler, requiresAuth: false }),
  createReplayMiddleware({ maximumDelay: 1000 }),
];

const store = createStore(
  wrapReducer(reducer),
  applyMiddleware(...middlewares)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
