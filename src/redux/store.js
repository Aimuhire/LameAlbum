import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import { asyncFunctionMiddleware } from "./middleware/asyncFunctionMiddleware";
import { albumReducer } from "./reducers/album/album.reducer";
import { loaderReducer } from "./reducers/loader/loader.reducer";

const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);

export default createStore(
  combineReducers({ albumReducer, loaderReducer }),
  middlewareEnhancer
);
