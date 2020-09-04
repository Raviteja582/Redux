import { createStore, combineReducers, applyMiddleware } from 'redux';
import store_0 from './operation';
import store_1 from './operation_1';
import { logger } from 'redux-logger';

const rootreducer = combineReducers({
    linear: store_0,
    expo: store_1
})


const store = createStore(rootreducer,applyMiddleware(logger));
export default store;