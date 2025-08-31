// src/components/UserProfile.jsx
import React from "react";

const UserProfile = (props) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.age}>Age: {props.age}</p>
      <p style={styles.bio}>{props.bio}</p>
    </div>
  );
};

// Simple inline styles for now
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "20px auto",
    maxWidth: "300px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  name: {
    margin: "0",
    fontSize: "1.5rem",
    color: "#333"
  },
  age: {
    margin: "10px 0",
    color: "#666"
  },
  bio: {
    fontStyle: "italic",
    color: "#444"
  }
};

export default UserProfile;
