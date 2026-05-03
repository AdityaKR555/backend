import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        setPosts(res.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();   
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Feed</h1>

      <div style={styles.grid}>
        {
          posts.length > 0 ? (
            posts.map(post => (
              <div key={post._id} style={styles.card}>
                <img src={post.image} alt={post.caption} style={styles.image} />
                <p style={styles.caption}>{post.caption}</p>
              </div>
            ))
          ) : (
            <p style={styles.empty}>No posts yet</p>
          )
        }
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1000px",
    margin: "auto"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#111827"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.2s"
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover"
  },
  caption: {
    padding: "10px",
    fontWeight: "500",
    color: "#374151"
  },
  empty: {
    textAlign: "center",
    width: "100%",
    color: "#6b7280"
  }
};

export default Feed;