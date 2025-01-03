import React from 'react';

//import link
import { Link } from 'react-router-dom';

//import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
        {/* buttons */}
        <nav className='flex items-center justify-between'>
          <div className='flex items-center gap-6'>
            <Link className='hover:text-violet-900 transition' to='/login'>Log in</Link>
            <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/signup'>Sign up</Link>
          </div>
          <Link to='/favorites' className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'>
            View Favorites
          </Link>
        </nav>
      </div> 
    </header>
  );
};

export default Header;
