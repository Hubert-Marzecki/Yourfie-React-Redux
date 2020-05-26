import React from 'react';
import "./small_button.scss"

export function SmallButton (props:{text:string}) : JSX.Element  {

    return (
            <button className="small__button" > {props.text} </button>
    )




}
