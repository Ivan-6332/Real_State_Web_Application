import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Allow fake email and password
    console.log('Logged in with fake credentials:', email, password);
    alert('Logged in successfully with fake credentials!');
    navigate('/'); // Navigate to home page after login
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/login.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-violet-700 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
