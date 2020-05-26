import React, {useState} from 'react';
import { Stats } from './features/stats/Stats';
import {Landing} from './components/landing/Landing';
import {Race} from './features/race/Race';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import {spotifyApi, token} from './services/ApiClient'
import {Login} from "./components/login/Login";

function App() {
  return (
    <div className="App">
      {token ?  <Landing/>  :    <Login />}
    </div>
  );
}

export default App;
