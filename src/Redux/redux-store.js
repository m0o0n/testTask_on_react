import { applyMiddleware, combineReducers, createStore } from 'redux';
import ContentReducer from './ContentReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  ContentReducer: ContentReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;
