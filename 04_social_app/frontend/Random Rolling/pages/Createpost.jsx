import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

  const [preview, setPreview] = useState(null); 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post("http://localhost:3000/create-post", formData)
      .then(res => {
        alert("Post created!");
        navigate("/");
      })
      .catch(err => console.error("Error creating post:", err));
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Post</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          
          <input 
            type="file" 
            accept='image/*' 
            name='image' 
            required 
            style={styles.inputFile}
          />

          <input 
            type="text" 
            name='caption' 
            placeholder='Write a caption...' 
            required 
            style={styles.input}
            onChange={(e) => setPreview(URL.createObjectURL(e.target.files[0]))}
          />

            {preview && <img src={preview} style={{width: "100%", borderRadius: "8px"}} />}

          <button type='submit' style={styles.button}>
            Upload
          </button>

        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6"
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#111827"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  inputFile: {
    padding: "6px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    transition: "0.3s"
  },
};

export default CreatePost;