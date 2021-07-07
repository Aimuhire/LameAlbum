import { APIEndpoints } from "./apiEndpoints";
import { HttpClient } from "../../httpClient.service";

export default class AlbumApi {
  static getAlbumPhotos(albumID) {
    return HttpClient.get(`${APIEndpoints.ALBUMS_ENDPOINT}/${albumID}/photos`);
  }
}
