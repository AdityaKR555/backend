import axios from "axios";

export default function AddNotes({ setNotes }) {

    const addNote = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;

        const newNote = {
            title,
            content
        };

        const res = await axios.post("http://localhost:3000/add-notes", newNote)

        e.target.title.value = "";
        e.target.content.value = "";
        setNotes(prev => [...prev, res.data.note]);
    }

    return (
    <div>
        <h2>Add Note</h2>
        <form onSubmit={addNote}>
            <input type="text" name="title" placeholder="Note Title" />
            <textarea name="content" placeholder="Note Content"></textarea>
            <button type="submit">Add Note</button>
        </form>

    </div>
    );
}