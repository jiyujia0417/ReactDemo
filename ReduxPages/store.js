import { createStore } from 'redux'
import todolist from './reducers';

const store = createStore(todolist);

export default store;