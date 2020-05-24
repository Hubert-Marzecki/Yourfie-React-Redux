import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import stats from "../../features/stats/statsSlice";


interface imageObject {
    height: number,
    url:string,
    width: number
}
interface User {
    country: string,
    display_name: string,
    email: string,
    external_urls: any,
    followers: {
        href: string,
        total: number
    },
    href:string,
    id: string,
    images:imageObject[],
    product:string,
    type: string,
    uri:string
}

function initialStateUser () {
    return {
        country: "PL",
        display_name: "AAA",
        email: "hmarzecki696@gmail.com",
        explicit_content: {filter_enabled: false, filter_locked: false},
        external_urls: {spotify: "https://open.spotify.com/user/21g7suzikynmr4oqslhgmldca"},
        followers: {href: null, total: 1},
        href: "https://api.spotify.com/v1/users/21g7suzikynmr4oqslhgmldca",
        id: "21g7suzikynmr4oqslhgmldca",
        images: [{height: 10, url: "dupe", width: 10}],
        product: "open",
        uri: "spotify:user:21g7suzikynmr4oqslhgmldca"
    }
}

export const user = createSlice({
    name: "user",
    initialState: initialStateUser(),
    reducers:{
        setUser: ( state:any, action) => action.payload
    }
})






export const setUser = (state:any) => state.user;
export default user;
