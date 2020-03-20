

export function setDisplay(buttonName) {
    if((buttonName === "hide") || (buttonName === "show")){
        return {
            type: "SET_EXTENDED"
        }
    }
    else{
        return {
            type: "SET_DISPLAY",
            buttonName,
        }
    }
}

export function handleExpressionClick(expression){
    return {
        type: "SET_EXPRESSION",
        value: expression
    }
} 

export function handleGarbageClick(expressionId){
    return {
        type: "DELETE_EXPRESSION",
        id: expressionId
    }
}
