import React, { useState } from 'react';
import { Button, Input } from '../../ui';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaSpinner } from 'react-icons/fa';
import './auth.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!credentials.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(credentials.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!credentials.password) {
      newErrors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      await login(credentials);
      navigate('/feed'); // Redirect to feed after successful login
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back to BISure Chat</h2>
        <p className="auth-subtitle">Connect with your community</p>
        
        {loginError && (
          <div className="auth-error">
            {loginError}
          </div>
        )}
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={credentials.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <Button 
            type="submit" 
            color="green"
            disabled={isLoading}
            className="auth-submit-btn"
          >
            {isLoading ? (
              <>
                <FaSpinner className="spin-icon" />
                Logging in...
              </>
            ) : (
              'Log In'
            )}
          </Button>
        </form>
        
        <div className="auth-actions">
          <Link to="/forgot-password" className="auth-link">
            Forgot password?
          </Link>
        </div>
        
        <div className="auth-switch">
          Don't have an account? {' '}
          <Link to="/signup" className="auth-link accent">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;