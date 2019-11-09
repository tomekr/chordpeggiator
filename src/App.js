import React from 'react';
import { Synth } from "tone";
import Fretboard, { chordNotes } from 'react-fretboard'
import './App.css';

//create a synth and connect it to the master output (your speakers)
//var synth = new Tone.Synth().toMaster();
//
////play a middle 'C' for the duration of an 8th note
//synth.triggerAttackRelease("C4", "8n");

function App() {
  return (
    <div className="App">
      <div>
        <Fretboard
          skinType="strings"
          selectedNotes={['C3', 'E3', 'G3']}
        />
      </div>
    </div>
  );
}

export default App;
