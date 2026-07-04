import { useEffect, useState } from "react";
import api from "../api";
import UserCard from "../components/UserCard";
import UpdateModal from "../components/UpdateModal";

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/viewall");
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;

    await api.delete(`/delete/${id}`);

    fetchUsers();
  };

  return (
    <>
      <div className="users-container">

        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            deleteUser={deleteUser}
            updateUser={() => setSelectedUser(user)}
          />
        ))}

      </div>

      {selectedUser && (
        <UpdateModal
          user={selectedUser}
          closeModal={() => setSelectedUser(null)}
          fetchUsers={fetchUsers}
        />
      )}
    </>
  );
}

export default ViewUsers;