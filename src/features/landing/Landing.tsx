import React, {useEffect} from "react"
import "./_landing.scss"
import  {useSelector, useDispatch} from "react-redux";
import userSlice, {getUser} from "./LandingSlice";
import topArtistsSlice, {getTopArtists} from "./LandingSlice";
import {spotifyApi} from "../../services/ApiClient";
import {Nav} from "../../components/Nav";



export function Landing() : JSX.Element {
const user = useSelector(getUser)
const dispatch = useDispatch()


    useEffect(() =>{
        getUserData()
        },[]);

    function getUserData ()  {
       spotifyApi.getMe().then((response) => {
                dispatch(userSlice.actions.loadUser(response))
            // .display_name === undefined || response.followers === undefined || response.followers.total === undefined
        }).catch(error => alert(error))
    }
      function fetchTopArtists () {
        spotifyApi.getMyTopArtists().then((response) => {
           dispatch(topArtistsSlice.actions.loadArtists(response))
        })
    }



    return (

    <div className="landing">
        <Nav/>
        <h1 className="header__cta">{user.display_name}</h1>
            <p className="header__cta__caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </p>
<section className="cards__container">
<div className="card card--first">
    <h2> Top Artist</h2>
</div>
    <div className=" card card--second">
        <h2> Top Tracks </h2>
    </div>
</section>


    </div>
  
  );
}
