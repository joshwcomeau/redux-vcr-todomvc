import { createStore, applyMiddleware, compose } from 'redux';

import { createRetrieveHandler, createRetrieveMiddleware } from 'redux-vcr.retrieve';
import { createReplayMiddleware, wrapReducer } from 'redux-vcr.replay';

import reducer from '../reducers';
import firebaseAuth from '../data/firebase-auth';

const retrieveHandler = createRetrieveHandler({ firebaseAuth });

const middlewares = [
  createRetrieveMiddleware({ retrieveHandler }),
  createReplayMiddleware(),
];

const enhancer = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
  return createStore(wrapReducer(reducer), initialState, enhancer);
}
