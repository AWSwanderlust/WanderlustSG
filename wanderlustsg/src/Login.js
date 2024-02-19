import React, { useState } from 'react';
import './Login.css';

const Login = ({ onClose }) => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add login logic here
    console.log(`Logging in with Email: ${Email} and password: ${password}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Log in to SGTour!</h2>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          id="Email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Login;
