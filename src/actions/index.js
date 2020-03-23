export function setDisplay(buttonName) {
    return {
        type: "SET_DISPLAY",
        buttonName,
    }
}

export function setExtended() {
    return {
        type: "SET_EXTENDED"
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

export function logIn(){
    return {
        type: "LOG_IN",
    }
}

