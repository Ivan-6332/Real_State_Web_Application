import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import FavoritesList from './components/FavoritesList'; // Corrected path for FavoritesList
import Login from './pages/Login';
import Signup from './pages/Signup';

// Import context
import HouseProvider from './components/HouseContext'; // Corrected path for HouseContext

const App = () => {
  return (
    <HouseProvider>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
          <Route path='/favorites' element={<FavoritesList />} /> {/* Add route for FavoritesList */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </HouseProvider>
  );
};

export default App;
