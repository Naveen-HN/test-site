import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "../Reducers";

const sagaMiddleWare = createSagaMiddleware();

let middleware = [sagaMiddleWare];

if (process.env.NODE_ENV === "developer") {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleWare.run(rootSaga);
export default store;
