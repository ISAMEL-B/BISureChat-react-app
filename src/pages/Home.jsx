// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to BISure Chat</h1>
      <div className="auth-links">
        <Link to="/login" className="auth-link">
          Login
        </Link>
        <Link to="/signup" className="auth-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;