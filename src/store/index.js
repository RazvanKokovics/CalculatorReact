import {createStore} from 'redux';
import {reducer} from "../reducers";

const initialState = {
    calculation : {
        total: null,
        result: false,
        history:"History: ",
        operationString:"",
        expressions:[
            {id: 0, string: "5+3"},
            {id: 1, string: "12*6"},
            {id: 2, string: "90/3*4"},
        ],
        expressionsCounter: 3,
    },
    extended:false,
    loggedin: false
};

export const store = createStore(reducer, initialState);