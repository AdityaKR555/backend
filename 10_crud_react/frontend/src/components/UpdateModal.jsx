import { useState, useEffect } from "react";
import api from "../api";

function UpdateModal({ user, closeModal, fetchUsers }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        image: user.image
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const updateUser = async (e) => {
    e.preventDefault();

    try {
      await api.patch(`/update/${user._id}`, formData);

      alert("User Updated Successfully!");

      fetchUsers();

      closeModal();
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Update User</h2>

        <form onSubmit={updateUser}>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />

          <div className="modal-buttons">
            <button type="submit">
              Update
            </button>

            <button
              type="button"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default UpdateModal;