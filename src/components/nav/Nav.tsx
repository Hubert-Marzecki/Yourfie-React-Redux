import React, {useEffect, useState} from "react"
import  {useSelector, useDispatch} from "react-redux";
import {setUser} from "../../app/slices/userSlice";
import Icon from "../../assets/icons/kz-number-one@3x.png";

import "./nav.scss";

export function Nav() : JSX.Element {
    const [state, setState] = useState<boolean>(false);
    const user = useSelector(setUser)

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
                    <li><a href="#">Look for tracks</a> </li>
                    <li><a href="#">  <img className="user__img" src={ user.images === undefined ? {Icon} : user.images[0].url} /> </a></li>
                </ul>
            </div>
        </div>

    );
}