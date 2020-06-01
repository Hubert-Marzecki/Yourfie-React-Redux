import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import topArtistsSlice, {setTopArtists} from "../../app/slices/topArtistSlice";
import "./_topArtists.scss"


export function TopArtistCards  () : JSX.Element  {
    const topArtists = useSelector(setTopArtists)


return (
            <div className="cards__container">
                {topArtists.items?.map((item:any, index:number) => {
                    return (
                        <div
                        key={item.url}
                        className="card__artist"
                        >
                         <img className="" src={item.images[1].url} />
                         <h1 className=""> {index + 1}. {item.name}</h1>
                            <p>Followers: {item.followers.total}</p>
                        </div>
                    )
                })}
            </div>
        )




}
