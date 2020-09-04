import { createStore } from 'redux';
import reducer from './operation';

const store = createStore(reducer);

export default store;