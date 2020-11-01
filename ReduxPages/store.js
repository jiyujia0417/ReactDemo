import { createStore } from 'redux'
import todolist from './todosReducers';

const store = createStore(todolist);

export default store;