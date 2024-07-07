import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import {
  appReducer,
  productsReducer,
  productReducer,
  userReducer,
} from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  user: userReducer,
  app: appReducer,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
