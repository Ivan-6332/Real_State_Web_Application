import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="Home">
          <img src={Logo} alt="App Logo" className="h-8 w-auto" />
          <span className="ml-3 text-xl font-semibold text-violet-700">
            HomeFinder
          </span>
        </Link>
        
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/favorites"
            className="text-gray-700 hover:text-violet-700 transition text-lg font-medium px-4 py-3 rounded-lg hover:bg-violet-200"
          >
            <span className="mr-2">❤️</span> Favorites
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-violet-700 transition text-lg font-medium px-4 py-3 rounded-lg"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-violet-700 hover:bg-violet-800 text-white text-lg font-medium px-6 py-3 rounded-lg transition"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
