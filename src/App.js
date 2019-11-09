import React from 'react';
import { Synth } from "tone";
import Fretboard, { chordNotes, scaleNotes } from 'react-fretboard'
import { Chord } from "tonal";
import './App.css';


function generateFretboardNotes(key) {
  // react-fretboard helper to generate a list of fretboard note objects that can
  // be passed to the selectedNotes property of the Fretboard component
  const fretboardNotesInScale = scaleNotes(key, 'major');

  // Use the Tonal library to generate the list of chord notes in the scale
  const chordNotesInScale = Chord.notes(`${key}M`);

  // Mark chord notes with a status of "chordNote" so they can be highlighted in
  // green 
  const fretboardNotes = fretboardNotesInScale.map(fretboardNote => {
    if (chordNotesInScale.includes(fretboardNote.note)) {
      return { ...fretboardNote, status: "chordNote" }
    }
    return fretboardNote;
  });

  return fretboardNotes;
}

const fretboardNotes = generateFretboardNotes('F#');

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
