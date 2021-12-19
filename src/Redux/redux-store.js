import { applyMiddleware, combineReducers, createStore } from "redux";
import ContentReducer from "./ContentReducer";
import thunk from 'redux-thunk'



let reducers = combineReducers({
    ContentReducer: ContentReducer
})

let store = createStore(reducers, applyMiddleware(thunk))
window.store =store
export default store