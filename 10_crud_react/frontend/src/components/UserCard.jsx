function UserCard({ user, deleteUser, updateUser }) {
  return (
    <div className="user-card">

      <img src={user.image} alt={user.name} />

      <h3>{user.name}</h3>

      <p>{user.email}</p>

      <div className="btn-group">

        <button
          className="update-btn"
          onClick={updateUser}
        >
          Update
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteUser(user._id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default UserCard;