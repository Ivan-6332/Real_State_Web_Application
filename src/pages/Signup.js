import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Signed up with fake credentials:', email, password);
      alert('Signed up successfully with fake credentials!');
    } else {
      console.error('Passwords do not match');
      alert('Passwords do not match!');
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/img/signup.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-black-200 to-white-300 opacity-80"></div>
      <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-sm z-10">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Create an Account</h2>
        <p className="text-center text-gray-600 mb-6">Sign up to get started</p>
        <form onSubmit={handleSignup}>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-purple-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
