import React, {useEffect} from "react"
import "./_landing.scss"
import  {useSelector, useDispatch} from "react-redux";
import userSlice, {setUser} from "../../app/slices/userSlice";
import topArtistsSlice, {setTopArtists} from "../../app/slices/topArtistSlice";
import topTracksSlice, {setTopTracks} from "../../app/slices/topTracksSlice";
import {spotifyApi} from "../../services/ApiClient";
import {Nav} from "../../components/nav/Nav";
import {TopArtistCards} from "../artistCard/TopArtistsCards";
import {Cta} from "../buttons/Cta";
import {SmallButton} from "../buttons/SmallButton";
import topTracks from "../../app/slices/topTracksSlice";



export function Landing() : JSX.Element {
const topArtists = useSelector(setTopArtists)
    const topTracks = useSelector(setTopTracks)
    const dispatch = useDispatch()


    useEffect(() =>{
        getUserData()
        getTopArtists()
        getTopTracks()
        },[]);


     function getUserData ()  :void {
        spotifyApi.getMe().then((response) => {
            dispatch(userSlice.actions.setUser(response))
        })
    }
    function getTopArtists () :void {
        spotifyApi.getMyTopArtistsShort().then((response) => {
            dispatch(topArtistsSlice.actions.setTopArtists(response))
        })
    }

     function getTopTracks () :void {
        spotifyApi.getMyTopTracks().then((response) => {
            dispatch(topTracksSlice.actions.setTopTracks(response))
        })
    }


    return (

    <div className="landing">
        <Nav/>
        <div className="landing__header">
        <h1 className="header__text">FEEL YOUR VIBE </h1>
        </div>

        <div className="info">
            <h2 className="info__head">FEEL YOUR VIBE </h2>
            <p className="info__text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </p>
            <SmallButton text={"Top Artists"} />
            <SmallButton text={"Top Tracks"} />
            <SmallButton text={"Your data"} />
        </div>


        <section className="cards">
            <h1> Top Artists {topArtists.items?.length} in last 4 weeks </h1>
            <TopArtistCards />
        </section>
        <Cta
        text="See more info!"
        />

    </div>
  
  );
}
