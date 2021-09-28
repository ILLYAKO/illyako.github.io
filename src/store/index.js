import {
  applyMiddleware,
  //  combineReducers,
  createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";
const initialState = {};
const middleware = [thunk];
// const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
