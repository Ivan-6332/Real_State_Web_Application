import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Allow fake email and password
    if (password === confirmPassword) {
      console.log('Signed up with fake credentials:', email, password);
      alert('Signed up successfully with fake credentials!');
    } else {
      console.error('Passwords do not match');
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/assets/img/signup.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
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
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="w-full bg-violet-700 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
