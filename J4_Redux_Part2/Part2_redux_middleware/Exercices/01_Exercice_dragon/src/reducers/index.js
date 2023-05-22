import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import dragon from './dragon';
import log from './log';
import knight from './knight';
import chrono from './chrono';
import middlewareLog from '../middlewares/log';

const middlewares = [ thunk, middlewareLog]

const rootReducer =  combineReducers({
    dragonReducer : dragon,
    logReducer : log,
    knightReducer : knight,
    chronoReducer : chrono
});

export default createStore(rootReducer, applyMiddleware(...middlewares) );
