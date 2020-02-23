import { NEW_USER, USER_LOGIN } from "./types";

export const userLogin = () => dispatch => {
  fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: USER_LOGIN,
        payload: data
      })
    );
};
