// Import React and useState hook from React library
import React, { useState } from 'react';

// Import useNavigate hook from react-router-dom for navigation
import { useNavigate } from 'react-router-dom';

// Define the Login functional component
const Login = () => {
  // Declare state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Initialize navigate function for programmatic navigation
  const navigate = useNavigate();

  // Function to handle the login form submission
  const handleLogin = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Log the fake credentials to the console
    console.log('Logged in with your credentials:', email, password);

    // Show a success alert to the user
    alert('Logged in successfully with your credentials!');

    // Navigate to the home page after login
    navigate('/');
  };

  // Return the JSX for rendering the login form
  return (
    // Main container for centering the form and setting the background image
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/img/login.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-500 opacity-70"></div>

      {/* Card container */}
      <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-sm z-10">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Welcome Back</h2>

        {/* Subheading */}
        <p className="text-center text-gray-600 mb-6">Login to continue</p>

        {/* element that comes with onSubmit handler */}
        <form onSubmit={handleLogin}>
          {/* Email input field */}
          <div className="mb-6">
            {/* Label for the email input */}
            <label className="block text-gray-700 font-semibold mb-2">Email</label>

            {/* Input field for email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="Enter your email"
              required // Make the field mandatory
            />
          </div>

          {/* Password input field */}
          <div className="mb-6">
            {/* Label for the password input */}
            <label className="block text-gray-700 font-semibold mb-2">Password</label>

            {/* Input field for password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="Enter your password"
              required // Make the field mandatory
            />
          </div>

          {/* Submit button for the form */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Text with a link to the password reset page */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Forgot your password? <a href="/reset" className="text-violet-500 hover:underline">Reset it</a>
        </p>
      </div>
    </div>
  );
};

// Export the Login component as the default export
export default Login;
