import {createStore, combineReducers, } from 'redux';
import { calculatorReducer, calculatorExtendedReducer } from "../reducers";

const rootReducer = combineReducers({
    calculation : calculatorReducer,
    extended: calculatorExtendedReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());