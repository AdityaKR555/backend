import { useState } from 'react'
import Navbar from './things/Navbar'
import AddNotes from './things/AddNotes'
import AllNotes from './things/AllNotes'

function App() {

  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Navbar />
      <AddNotes setNotes={setNotes} />
      <AllNotes notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App
