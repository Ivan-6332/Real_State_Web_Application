import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoritesList = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <p>No favorite items added yet.</p>;
  }

  return (
    <div className="favorites-list">
      <h2>Favorites</h2>
      <ul>
        {favorites.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => removeFromFavorites(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
