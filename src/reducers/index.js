import calculate from "../service/calculate";

export function reducer (state, action) {
   
	switch (action.type) {
		case "SET_DISPLAY":
            const calculation = calculate(state.calculation, action.buttonName);
			return {
                ...state, 
                calculation : calculation,
            };
        case "SET_EXTENDED":
            return {
                ...state,
                extended : !state.extended,
            }
        case "SET_EXPRESSION":
            return {
                ...state,
                calculation : {...state.calculation, operationString: action.value}
            }
        case "DELETE_EXPRESSION":
            let filtered = state.calculation.expressions.filter((expression) => { return expression.id !== action.id; });
            return {
                ...state,
                calculation : {...state.calculation, expressions: filtered}
            }
		default:
		    return state;
	}
}
