// 

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#fff" : "#ddd",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: "500",
    transition: "0.3s"
  });

  return (
    <div style={styles.navbar}>
      <h2 style={styles.logo}>Random Rolling</h2>

      <div style={styles.links}>
        <NavLink to="/" style={linkStyle}>
          Feed
        </NavLink>

        <NavLink to="/create-post" style={linkStyle}>
          Add Post
        </NavLink>
      </div>
    </div>
  )
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    backgroundColor: "#111827",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "12px"
  }
};

export default Header