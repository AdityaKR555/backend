import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2>CRUD App</h2>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Create User
        </Link>

        <Link
          to="/users"
          className={location.pathname === "/users" ? "active" : ""}
        >
          View All Users
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;