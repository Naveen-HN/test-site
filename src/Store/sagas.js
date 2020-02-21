import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../Actions/types";
import { getDataFromServer } from "../Service";

function* createUser(action) {
  try {
    const reqMethod = "POST";
    const baseURL = "http://localhost:4000/users/add";
    let formBody = action.payload;

    console.log("Action =>" + JSON.stringify(action));
    const response = yield call(
      getDataFromServer,
      baseURL,
      reqMethod,
      formBody
    );
    const result = yield response.json();
    if (result.error) {
      yield put({
        type: Types.CREATE_USER_RESPONSE_FAILURE,
        error: result.error
      });
    } else {
      yield put({ type: Types.CREATE_USER_RESPONSE_SUCCESS, result });
    }
  } catch (error) {
    console.log("Error at Saga createUser", error);
  }
}

export default function* rootSaga(params) {
  yield takeLatest(Types.CREATE_USER, createUser);
  console.log("ROOT SAGA");
}
