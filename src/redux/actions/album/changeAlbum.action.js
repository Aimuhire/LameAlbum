import AlbumApi from "../../../services/api/v1/album.api";
import { ALBUM_CHANGE } from "../../constants/actionTypes";
import { showLoader } from "../loader/showLoader.action";

export function changeAlbum(albumID) {
  // This returned function accepts dispatch and getState as arguments.
  // getState was omitted since it was not being used in this case.
  return (dispatch) => {
    dispatch(showLoader(true));
    return AlbumApi.getAlbumPhotos(albumID)
      .then((response) => response.json())
      .then((albumPhotos) => {
        dispatch(showLoader(false));

        dispatch({
          type: ALBUM_CHANGE,
          payload: {
            albumID,
            albumPhotos,
          },
        });
      })
      .catch((err) => {
        dispatch(showLoader(false));
        alert("Some error happened");
      });
  };
}
