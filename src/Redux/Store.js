import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

export const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    //   process.env.NODE_ENV === "development"
    //     ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
    //     : null || compose
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
