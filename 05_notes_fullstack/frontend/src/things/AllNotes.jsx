import { useEffect } from "react";
import axios from "axios";

export default function AllNotes({ notes, setNotes }) {
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get("http://localhost:3000/notes");
      console.log(res);
      setNotes(res.data.notes);
    };

    fetchNotes();
  }, []);

  const editNote = async (id) => {
     try {
    const newTitle = prompt("Enter new title:");
    const newContent = prompt("Enter new content:");

    if (!newTitle || !newContent) return;

    const res = await axios.patch(`http://localhost:3000/notes/${id}`, {
      title: newTitle,
      content: newContent,
    });

    // update UI
    setNotes(prev =>
      prev.map(note =>
        note._id === id
          ? { ...note, title: newTitle, content: newContent }
          : note
      )
    );

  } catch (err) {
    console.error(err);
  }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="allnotesparent">
      <h2>All Notes</h2>

      {notes.length > 0 ? (
        notes.map((note) => (
            note && (
                 <div key={note._id} className="allNotes">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <div className="ndbtn">
              <button onClick={() => editNote(note._id)}>Edit</button>
              <button onClick={() => deleteNote(note._id)}>Delete</button>
            </div>
          </div>
            )
         
        ))
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
}
