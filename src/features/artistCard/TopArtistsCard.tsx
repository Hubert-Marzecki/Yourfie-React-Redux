import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import topArtistsSlice, {setTopArtists} from "../../app/slices/topArtistSlice";
import userSlice, {setUser} from "../../app/slices/userSlice";

export const TopArtistCard = () : JSX.Element => {
    const topArtists = useSelector(setTopArtists)
    console.log(topArtists)

return (


            <div>

            </div>
        )




}
