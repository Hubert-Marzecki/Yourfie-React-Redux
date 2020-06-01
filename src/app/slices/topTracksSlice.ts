import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const topTracks = createSlice({
    name: "topTracks",
    initialState: [],
    reducers:{
        setTopTracks: ( state:any, action) => action.payload
    }
})

export const setTopTracks = (state:any) => state.topTracks;
export default topTracks;
