import { ALBUM_CHANGE } from "../../constants/actionTypes";

export const albumReducer = (
  state = { albumID: null, albumPhotos: [] },
  action
) => {
  switch (action.type) {
    case ALBUM_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
