import { useState } from 'react'
import StickyNote from "./components/stickyNote"
import "./App.css";

function App() {
  const [notes, setNotes] = useState([])
  function addNote() {
    setNotes([
      ...notes,
      {
        id: Date.now(),
      },
    ])
  }

  function removeNote(noteId) {
    setNotes(notes.filter((item => item.id !== noteId)))
  }
  return (
    <div className="App" >
      <button className="sticky-btn" onClick={addNote}>
        Create New Note
      </button>

      {notes.map((item) => (
        <StickyNote key={item.id} onClose={() => removeNote(item.id)} />
      ))}
    </div >
  )
}

export default App
