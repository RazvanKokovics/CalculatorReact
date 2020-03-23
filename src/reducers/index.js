import calculate from "../service/calculate";

const initialCalculatorState = {
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
    }

export const calculatorReducer = (state = initialCalculatorState, action) => {
   
	switch (action.type) {
		case "SET_DISPLAY":
            const calculation = calculate(state, action.buttonName);
			return calculation;
        case "SET_EXPRESSION":
            return {
                ...state, 
                operationString: action.value
            }
        case "DELETE_EXPRESSION":
            let filtered = state.expressions.filter((expression) => { return expression.id !== action.id; });
            return {
                ...state, 
                expressions: filtered
            }
		default:
		    return state;
	}
}

const initialCalculatorExtendedState = false;

export const calculatorExtendedReducer = (state = initialCalculatorExtendedState, action) => {
    switch (action.type) {
        case "SET_EXTENDED":
            return !state;
        default:
		    return state;
    }
}