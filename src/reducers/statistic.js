import {
  GET_USER_ROLE_STATISTIC_SUCCESS,
  GET_EXPRESSION_STATISTIC_SUCCESS,
  GET_EXPRESSION_USER_STATISTIC_SUCCESS,
} from 'constants/actionTypes.js';

const initialStatisticState = {
  userRoles: {},
  userExpressions: {},
  expressionUser: {},
};

export const statisticReducer = (state = initialStatisticState, action) => {
  switch (action.type) {
    case GET_USER_ROLE_STATISTIC_SUCCESS:
      return {
        ...state,
        userRoles: action.data,
      };

    case GET_EXPRESSION_STATISTIC_SUCCESS:
      return {
        ...state,
        userExpressions: action.data,
      };

    case GET_EXPRESSION_USER_STATISTIC_SUCCESS:
      return {
        ...state,
        expressionUser: action.data,
      };

    default:
      return state;
  }
};
