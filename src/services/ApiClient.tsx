import Spotify from "spotify-web-api-js";
import userSlice from "../app/slices/userSlice";
import topArtistsSlice from "../app/slices/topArtistSlice";
import {useDispatch} from "react-redux";

export const spotifyApi = new Spotify();
spotifyApi.setAccessToken('');
function getHashParams() {
    var hashParams : any = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}

const params = getHashParams()
export const token = params.access_token ;
if (token) {
    spotifyApi.setAccessToken(token);
}

