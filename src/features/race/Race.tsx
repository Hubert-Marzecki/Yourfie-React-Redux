import React, { useState, useRef, useImperativeHandle } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Checkbox, Form, Statistic, Confirm, Reveal, ButtonProps } from "semantic-ui-react";


import {
  selectStats, changeRace,
  AppState,
  RaceInfo,
} from "../stats/statsSlice";

import  "_race.scss";

export function Race() {
  const state: AppState = useSelector(selectStats);
  const dispatch = useDispatch();

  function raceButton(raceInfo: RaceInfo): JSX.Element {
      return (
        <Button onClick={() => dispatch(changeRace(raceInfo.race))}>
          {raceInfo.name}
        </Button>
      );
  }

  return (
    <div>
      <h1> CHOOSE RACE!</h1>
      {state.races.map(raceButton)}


 
    </div>
  );
}
