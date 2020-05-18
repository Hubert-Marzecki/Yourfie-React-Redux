import React, {useEffect, useState} from "react"
import  {useSelector, useDispatch} from "react-redux";
import {getUser} from "../features/landing/LandingSlice";
import "./nav.scss";

export function Nav() : JSX.Element {
    const [state, setState] = useState<boolean>(false);
    const user = useSelector(getUser)

    return (
        <div className="landing">
            <div className={state===true ? "manu active " : "manu "}
                 onClick={(e) => setState(!state)}
            >

                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={state===true ? "manuItem active" : " manuItem "}

            >
                <ul>

                    <li><a href="#">Home</a></li>
                    <li><a href="#">TopArtists</a></li>
                    <li><a href="#">Top Tracks</a></li>
                    <li><a href="#">{user.display_name}</a> </li>
                    <li><a href="#">  <img className="user__img" src={user.images[0].url} /> </a></li>
                </ul>
            </div>
        </div>

    );
}