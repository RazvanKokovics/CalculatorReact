import calculate from "../service/calculate";

export function setDisplay(previousState, buttonName) {
    if((buttonName === "hide") || (buttonName === "show")){
        return {
            type: "SET_EXTENDED",
            extended: !previousState.extended
        }
    }
    else{
        const calculation = calculate(previousState.calculation, buttonName);
        return {
            type: "SET_DISPLAY",
            calculation,
        }
    }
    
}