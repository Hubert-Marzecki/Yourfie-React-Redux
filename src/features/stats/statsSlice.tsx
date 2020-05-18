import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Modyfikator liczony od wartości stats


export enum Stat {
  STR,
  DEX,
  CON,
  INT,
  WIS,
  CHA,
}
export enum Race {
  DWARF,
  ELF,
  GNOME,
  HALFLING,
  HUMAN,
  HALF_ELF,
  HALF_ORC,
}
export interface StatModification {
  stat: Stat,
  modifier: number
}
export interface RaceInfo {
  // abilities, size, etc.
  race: Race;
  name: string,

  // Przyjmuje tablice o1biektów o kszrtałcie StatModification
  statModifications: StatModification[]
}
export interface AppState {
  // all avaliable races
  races: RaceInfo[];
  chosenRace: Race,

  str: number;
  dex: number;
  int: number;
  con: number;
  win: number;
  char: number;

  strModi: number;
  dexModi: number;
  intModi: number;
  conModi: number;
  winModi: number;
  charModi: number;

  points: number;


}

function statModification(stat: Stat, modifier: number ): StatModification {
  return {
    stat: stat,
    modifier: modifier
  };
}
// Pisząc to w ten sposób możemy zagnieździć KONKRETNE/NAZWANE krształby to których 
// Możemy się potem bezpośredio odnosić
export function modifierFromStat(stat: number): number {
  return -5 + Math.floor(stat/2);
}



export function initRaceInfo(): RaceInfo[] {
  return [
    {
      race: Race.DWARF,
      name: "Dwarf",
      statModifications: [
        statModification(Stat.CHA,-2),
        statModification(Stat.CON, 2),
        statModification(Stat.WIS, 2),
      ],
    },
    {
      race: Race.HUMAN,
      name: "Human",
      statModifications: [
        statModification(Stat.STR, 2),
      ],
    },
    {
      race: Race.ELF,
      name: "Elf",
      statModifications: [
        statModification(Stat.DEX, 2),
        statModification(Stat.INT, 2),
        statModification(Stat.CON, -2),
      ],
    },
    {
      race: Race.GNOME,
      name: "Gnome",
      statModifications: [
        statModification(Stat.CON, 2),
        statModification(Stat.CHA, 2),
        statModification(Stat.STR, -2),
      ],
    },
    {
      race: Race.HALFLING,
      name: "Halfling",
      statModifications: [
        statModification(Stat.DEX, 2),
        statModification(Stat.CHA, 2),
        statModification(Stat.STR, -2),
      ],
    },
    
  ];
}


export function getStat(stat: Stat, state:AppState): number {
  switch (stat) {
    case Stat.STR: {
      return state.str;
    }
    case Stat.DEX: {
      return state.str;
    }
    case Stat.INT: {
      return state.str;
    }
    case Stat.CON: {
      return state.str;
    }
    case Stat.WIS: {
      return state.str;
    }
    case Stat.CHA: {
      return state.str;
    }
  }
}


let initState = () : AppState => {
  return {
    races : initRaceInfo(),
    chosenRace: Race.HUMAN,
    str: 10,
    dex: 10,
    int: 10,
    con: 10,
    win: 10,
    char: 10,
    strModi: 0,
    dexModi: 0,
    intModi: 0,
    conModi: 0,
    winModi: 0,
    charModi: 0,
    points: 30,




  };
};

export const stats = createSlice({
  name: "stats",
  initialState: initState(),
  reducers: {

    changeRace: (state: AppState, action: PayloadAction<Race>) => {
      state.chosenRace = action.payload;
    },

  }
});





export const {
  changeRace
} = stats.actions;

export const selectStats = (state: any) => state.stats;
export default stats

