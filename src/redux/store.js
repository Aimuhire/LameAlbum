import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { asyncFunctionMiddleware } from "./middleware/asyncFunctionMiddleware";
import { albumReducer } from "./reducers/album.reducer";

const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);

export default createStore(
  combineReducers({ albumReducer }),
  compose(applyMiddleware(logger), middlewareEnhancer)
);
