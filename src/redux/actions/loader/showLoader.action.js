import { LOADER_STATE_CHANGE } from "../../constants/actionTypes";

export function showLoader(show) {
  return (dispatch) =>
    dispatch({
      type: LOADER_STATE_CHANGE,
      payload: show,
    });
}
