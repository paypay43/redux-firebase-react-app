import { createStore } from 'redux';
import clientReducer from '../reducers/clientReducer';

const store = createStore(clientReducer);

export default store;
