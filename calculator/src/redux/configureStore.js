import { createStore, combineReducers } from 'redux';
import store_0 from './operation';
import store_1 from './operation_1';

const rootreducer = combineReducers({
    linear: store_0,
    expo: store_1
})


const store = createStore(rootreducer);

export default store;