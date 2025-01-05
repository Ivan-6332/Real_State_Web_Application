// Import React and useState hook from React library
import React, { useState } from 'react';

// Define the Signup functional component
const Signup = () => {
  // Declare state variables for email, password, and confirmPassword
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle the signup form submission
  const handleSignup = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if the password matches the confirmPassword field
    if (password === confirmPassword) {
      // Log the credentials to the console if passwords match
      console.log('Signed up with your credentials:', email, password);

      // Show a success alert to the user
      alert('Signed up successfully with your credentials!');
    } else {
      // Log an error message if passwords do not match
      console.error('Passwords do not match');

      // Show an error alert to the user
      alert('Passwords do not match!');
    }
  };

  // Return the JSX for rendering the signup form
  return (
    // Main container for centering the form and setting the background image
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/assets/img/signup.jpg)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 via-black-200 to-white-300 opacity-80"></div>

      {/* Card container for the form */}
      <div className="relative bg-white p-10 rounded-lg shadow-lg w-full max-w-sm z-10">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">Create an Account</h2>

        {/* Subheading */}
        <p className="text-center text-gray-600 mb-6">Sign up to get started</p>

        {/* element that comes with onSubmit handler */}
        <form onSubmit={handleSignup}>
          {/* Email input field */}
          <div className="mb-6">
            {/* Label for the email input */}
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            
            {/* Input field for email */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Create a password"
              required // Make the field mandatory
            />
          </div>

          {/* Confirm Password input field */}
          <div className="mb-6">
            {/* Label for the confirm password input */}
            <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>

            {/* Input field for confirm password */}
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state on change
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Confirm your password"
              required // Make the field mandatory
            />
          </div>

          {/* Submit button for the form */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Text with a link to the login page */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-purple-500 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

// Export the Signup component as the default export
export default Signup;
