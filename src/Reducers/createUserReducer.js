import * as Types from "../Actions/types";

const initialState = {
  user: {
    firstName: "",
    lastName: "",
    phone: "",
    userName: "",
    password: "",
    confirmPassword: ""
  }
};

const handleCreateUserResponseSuccess = (state, action) => {
  let newState = {
    ...state
  };
  if (action.result !== undefined) {
    newState = Object.assign({}, state, {
      result: Object.assign({}, action.result)
    });
  }
  return {
    ...newState
  };
};

const handleCreateUserResponseFailure = (state, action) => {
  let newState = {
    ...state
  };
  return {
    ...newState
  };
};

const createUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_USER:
      return {
        ...state
      };
    case Types.CREATE_USER_RESPONSE_SUCCESS:
      return handleCreateUserResponseSuccess(state, action);
    case Types.CREATE_USER_RESPONSE_FAILURE:
      return handleCreateUserResponseFailure(state, action);
    default:
      return state;
  }
};

export default createUserReducer;
