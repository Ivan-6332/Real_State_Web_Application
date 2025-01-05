import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logged in with fake credentials:', email, password);
    alert('Logged in successfully with fake credentials!');
    navigate('/'); // Navigate to home page after login
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/img/login.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-500 opacity-70"></div>
      <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-sm z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Login to continue</p>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Forgot your password? <a href="/reset" className="text-violet-500 hover:underline">Reset it</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
