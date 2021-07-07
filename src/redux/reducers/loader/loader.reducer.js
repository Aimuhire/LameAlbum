import { LOADER_STATE_CHANGE } from "../../constants/actionTypes";

export const loaderReducer = (state = false, action) => {
  switch (action.type) {
    case LOADER_STATE_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
