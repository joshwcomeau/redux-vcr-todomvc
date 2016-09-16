import { createStore, applyMiddleware, compose } from 'redux';

import { createCaptureMiddleware } from 'redux-vcr.capture';
import { createPersistHandler } from 'redux-vcr.persist';

import reducer from '../reducers';
import firebaseAuth from '../data/firebase-auth';

const persistHandler = createPersistHandler({ firebaseAuth });

const middlewares = [ createCaptureMiddleware({ persistHandler }) ];

const enhancer = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
