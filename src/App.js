import React from 'react';
import { Synth } from "tone";
import Fretboard, { chordNotes, scaleNotes } from 'react-fretboard'
import { Chord } from "tonal";
import './App.css';

// react-fretboard helper to generate a list of fretboard note objects that can
// be passed to the selectedNotes property of the Fretboard component
const fretboardNotesInScale = scaleNotes('C', 'major');

// Use the Tonal library to generate the list of chord notes in the scale
const chordNotesInScale = Chord.notes('CM');

// Mark chord notes with a status of "chordNote" so they can be highlighted in
// green 
const fretboardNotes = fretboardNotesInScale.map(fretboardNote => {
  if (chordNotesInScale.includes(fretboardNote.note)) {
    fretboardNote.status = "chordNote";
  }
  return fretboardNote
});

function App() {
  return (
    <div className="App">
      <div>
        <Fretboard
          skinType="strings"
          selectedNotes={fretboardNotes}
          theme={{ statusMap: { chordNote: '#b9e59e' }}}
        />
      </div>
    </div>
  );
}

export default App;
