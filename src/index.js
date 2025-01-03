import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//import router
import { BrowserRouter as Router } from 'react-router-dom';

//import house context provider
import HouseContextProvider from './components/HouseContext';

//import favorites context provider
import { FavoritesProvider } from './context/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <HouseContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </HouseContextProvider>
  </FavoritesProvider>
);
