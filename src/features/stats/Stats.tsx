import React from "react";
import { useSelector, useDispatch, } from "react-redux";
import { Button, Checkbox, Form, Statistic, Grid, Segment, Container } from "semantic-ui-react";
import  "./_stats.scss";
import {
  selectStats, Stat, AppState, RaceInfo, getStat, Race, StatModification, modifierFromStat,
} from "./statsSlice";

function sum(a: number, b: number): number {
  return a + b;
}
 
function statDisplayValue(stat: Stat, state: AppState): number {
  let currentRace: Race = state.chosenRace;
  let raceInfo: RaceInfo = state.races.filter((it) => it.race == currentRace)[0];
  
  let modificator: number = raceInfo.statModifications
    .filter((it: StatModification) => it.stat == stat)
    .map((it: StatModification) => it.modifier)
    .reduce(sum, 0);
  let currentStat: number = getStat(stat, state);
  return currentStat + modificator;
}




function showStatName (statType:Stat) {
  var displayStr:string= "STR";
  var displayDex:string= "DEX";
  var displayCon:string= "CON";
  var displayInt:string= "INT";
  var displayWin:string= "WIN";
  var displayCha:string= "CHA";

  if ( statType === 0) {
    return displayStr
  }
  if ( statType === 1) {
    return displayDex
  }
  if ( statType === 2) {
    return displayCon
  }
  if ( statType === 3) {
    return displayInt
  }
  if ( statType === 4) {
    return displayWin
  }
  if ( statType === 5) {
    return displayCha
  }
}

// Funkcja, która przy zmianie nazwy tworzy cały komponent
function placedStat (statType:Stat, stats:AppState) {


  
  return (
    <div>
        <Grid.Column>
            <Segment>
              <h1> {showStatName(statType)} </h1>
              <Button

                aria-label="Increment value"
              >
                -
              </Button>
              <Statistic>
                <Statistic.Value>{statDisplayValue( statType, stats)}</Statistic.Value>
                <Statistic.Label>Modi: {modifierFromStat(statDisplayValue(statType, stats))}</Statistic.Label>
              </Statistic>
              <Button
                aria-label="Decrement value"
              
              >
                +
              </Button>
            </Segment>
          </Grid.Column>
    </div>
  )
}
export function Stats() {
  const stats: AppState = useSelector(selectStats);
  const dispatch = useDispatch();


 
  return (


    <div>
        

      {/* STR */}
      <h1> TOTAL POINTS: {stats.points} </h1>
      <Grid columns={6}>
        <Grid.Row>
        {placedStat(Stat.STR, stats)}
        {placedStat(Stat.DEX, stats)}
        {placedStat(Stat.CON, stats)}
        {placedStat(Stat.INT, stats)}
        {placedStat(Stat.WIS, stats)}
        {placedStat(Stat.CHA, stats)}


        
        </Grid.Row>
      </Grid>
    </div>
  );
}
