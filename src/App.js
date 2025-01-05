import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import FavoritesList from './components/FavoritesList'; // path for FavoritesList

// Import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Import context
import HouseProvider from './components/HouseContext'; // path for HouseContext

const App = () => {
  return (
    <HouseProvider>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> {/* Add route for home */}
          <Route path='/property/:id' element={<PropertyDetails />} /> {/* Add route for property page */}
          <Route path='/favorites' element={<FavoritesList />} /> {/* Add route for FavoritesList */}
          <Route path='/login' element={<Login />} /> {/* Add route for login page */}
          <Route path='/signup' element={<Signup />} /> {/* Add route for sign up page */}
        </Routes>
        <Footer />
      </div>
    </HouseProvider>
  );
};

export default App;
