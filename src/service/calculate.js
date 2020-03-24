import { evaluate } from 'mathjs';

let undoStack = [];
undoStack.push();
let redoStack = [];

function isNumber(data) {
  return !isNaN(data);
}

function operateString(str) {
  return evaluate(str);
}

function isOperation(str) {
  if (str === '+' || str === '-' || str === '*' || str === '/') {
    return true;
  }
  return false;
}

function saveState(object) {
  undoStack.push(object);
  redoStack = [];
}

function validString(str) {
  let stack = [];
  if (str.length === 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push('(');
    if (str[i] === ')') {
      let p = stack.pop();
      if (p !== '(') return false;
    }
  }
  if (stack.length === 0) return true;
  return false;
}

function isSliceable(number) {
  let nr = number.toString();
  if (nr[nr.length - 1] === '0') {
    nr = nr.slice(0, nr.length - 1);
    if (nr[nr.length - 1] === '0') {
      nr = nr.slice(0, nr.length - 2);
    }
  }
  return nr;
}

function calculate(obj, buttonName) {
  if (buttonName === 'x') {
    buttonName = '*';
  }

  //Undo Button
  if (buttonName === 'Undo') {
    if (undoStack.length > 0) {
      let object = undoStack.pop();
      redoStack.push(obj);
      return object;
    }
    alert('Nothing to undo!');
    return obj;
  }

  //Redo Button
  if (buttonName === 'Redo') {
    if (redoStack.length > 0) {
      let obj = redoStack.pop();
      undoStack.push(obj);
      return obj;
    }
    alert('Nothing to redo!');
    return obj;
  }

  //% Button
  if (buttonName === '%') {
    if (validString(obj.operationString)) {
      saveState({ ...obj });
      let result1 = isSliceable(operateString(obj.operationString).toFixed(2));
      let result2 = isSliceable(operateString(result1 + '/100').toFixed(2));
      let expressions = addExpression(obj, obj.operationString);
      return {
        result: true,
        total: result2,
        operationString: '',
        history: obj.history + obj.operationString + '=' + result1 + '; ',
        expressionsCounter: expressions.length,
        expressions: expressions,
      };
    }
    if (obj.result === true) {
      let res = isSliceable(operateString(obj.total + '/100'));
      saveState({ ...obj });
      return {
        ...obj,
        total: res,
      };
    }
  }

  //+/- Button
  if (buttonName === '+/-') {
    if (validString(obj.operationString)) {
      saveState({ ...obj });
      let res1 = isSliceable(operateString(obj.operationString).toFixed(2));
      let res2 = isSliceable(operateString('-' + res1).toFixed(2));
      let expressions = addExpression(obj, obj.operationString);
      return {
        ...obj,
        result: true,
        total: res2,
        operationString: '',
        history: obj.history + obj.operationString + '=' + res1 + '; ',
        expressionsCounter: expressions.length,
        expressions: expressions,
      };
    }
    if (obj.result === true) {
      let res = isSliceable(operateString('-' + obj.total).toFixed(2));
      saveState({ ...obj });
      return {
        ...obj,
        total: res,
      };
    }
  }

  //() or number Button and takes the reult from previous calculus
  if (obj.result && (isNumber(buttonName) || '()'.includes(buttonName))) {
    saveState({ ...obj });
    return {
      ...obj,
      result: false,
      operationString: buttonName,
    };
  }

  //Operation or . Button and takes the result from previous calculus
  if (obj.result && '+.*/-'.includes(buttonName)) {
    saveState({ ...obj });
    return {
      ...obj,
      result: false,
      operationString: obj.total + buttonName,
    };
  }

  //(). or Number Button, without result from previous calculus
  if (isNumber(buttonName) || '()+-/*.'.includes(buttonName)) {
    let l = obj.operationString.length;
    if (l === 0) {
      if ('0)+-/*'.includes(buttonName)) {
        return {
          ...obj,
        };
      }
      saveState({ ...obj });
      if (buttonName === '.') {
        return {
          ...obj,
          operationString: '0.',
          result: false,
        };
      }
      return {
        ...obj,
        operationString: obj.operationString + buttonName,
        result: false,
      };
    } else {
      let lastCharacter = obj.operationString[l - 1];
      if (isOperation(buttonName) && isOperation(lastCharacter)) {
        saveState({ ...obj });
        return {
          ...obj,
          operationString: obj.operationString.slice(0, l - 1) + buttonName,
        };
      }
      if (buttonName === ')' && '(.+-/*'.includes(lastCharacter)) {
        return {
          ...obj,
        };
      }
      if (
        buttonName === '(' &&
        (isNumber(lastCharacter) || '.)'.includes(lastCharacter))
      ) {
        return {
          ...obj,
        };
      }
      saveState({ ...obj });
      return {
        ...obj,
        operationString: obj.operationString + buttonName,
        result: false,
      };
    }
  }

  if (buttonName === '.') {
    if (obj.operationString === '') {
      return {
        ...obj,
      };
    } else {
      let lastCharacter = obj.operationString[obj.operationString.length - 1];
      if (isNumber(lastCharacter)) {
        saveState({ ...obj });
        return {
          ...obj,
          operationString: obj.operationString + buttonName,
          result: false,
        };
      }
      return {
        ...obj,
      };
    }
  }

  if (buttonName === 'AC') {
    undoStack = [];
    redoStack = [];
    return {
      ...obj,
      total: null,
      next: null,
      operation: null,
      history: '',
      operationString: '',
      result: false,
    };
  }

  if (buttonName === '=') {
    if (validString(obj.operationString)) {
      saveState({ ...obj });
      let result = isSliceable(operateString(obj.operationString).toFixed(2));
      let expressions = addExpression(obj, obj.operationString);
      return {
        ...obj,
        result: true,
        total: result,
        operationString: '',
        history: obj.history + obj.operationString + '=' + result + '; ',
        expressionsCounter: expressions.length,
        expressions: expressions,
      };
    }
    alert('The string is not a valid expression');
    return;
  }
}

function addExpression(obj, expression) {
  let expressions = [...obj.expressions];
  for (let i = 0; i < expressions.length; i++) {
    if (expressions[i].string === expression) {
      return expressions;
    }
  }
  expressions.push({ id: obj.expressionsCounter, string: expression });
  return expressions;
}

export default calculate;
