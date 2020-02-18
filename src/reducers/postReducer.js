import { NEW_USER, USER_LOGIN } from "../actions/types";

const initialState = {
  user: {},
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
