import React, { useState } from 'react';
import { Button, Input } from '../../ui';
import { Link } from 'react-router-dom';
import './auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Signup data:', formData);
  };

  return (
    <div className="auth-container">
      <h2>Join BISure Chat</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit" color="purple">
          Sign Up
        </Button>
      </form>
      
      <p className="auth-switch">
        Already have an account? {' '}
        <Link to="/login" className="auth-link">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;