import { type } from "os";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
//@ts-ignore
import ContentReducer from "./ContentReducer.ts";
import thunk from "redux-thunk";

const reducers = combineReducers({
  ContentReducer: ContentReducer,
});
type rootType = typeof reducers;
export type AppStateType = ReturnType<rootType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// applyMiddleware(thunk);

export default store;
