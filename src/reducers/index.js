

export function reducer (state, action) {
   
	switch (action.type) {
		case "SET_DISPLAY":
			return {
                ...state, 
                calculation : action.calculation,
            };
        case "SET_EXTENDED":
            return {
                ...state,
                extended : action.extended,
            }
		default:
		    return state;
	}
}
