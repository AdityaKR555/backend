import { useState } from 'react'
import Navbar from './things/Navbar'
import AddNotes from './things/AddNotes'
import AllNotes from './things/AllNotes'
import './index.css'

function App() {

  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Navbar />
      <div className="app-content">
        <AddNotes setNotes={setNotes} />
        <AllNotes notes={notes} setNotes={setNotes} />
      </div>
    </div>
  )
}

export default App
