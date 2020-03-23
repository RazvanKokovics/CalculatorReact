import { LOGIN } from "constants/actionTypes.js"

const initialLogInState = {
  username : "",
  password : "",
  jwt : ""
}
  
export const loginReducer = (state = initialLogInState, action) => {   
  switch (action.type) {
    case LOGIN:
      return action.credentials;

    default:
      return state;
  }
}