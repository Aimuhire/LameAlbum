import AlbumApi from "../../services/api/v1/album.api";
import { ALBUM_CHANGE } from "../constants/actionTypes";

export function changeAlbum(albumID) {
  return (dispatch, getState) =>
    AlbumApi.getAlbumPhotos(albumID)
      .then((response) => response.json())
      .then((albumPhotos) => {
        dispatch({
          type: ALBUM_CHANGE,
          payload: albumPhotos,
        });
      })
      .catch((err) => {
        alert("Some error happened");
      });
}
