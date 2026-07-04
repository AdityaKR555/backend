import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function CreateUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/create", formData);

      alert("User Created Successfully!");

      navigate("/users");
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Create User</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Paste Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;