import './App.css';
import GlobalContext from './store/GlobalContext';
import { useEffect, useState } from 'react';
import { AppRouter } from './routers/AppRouter';

function App() {
  const [wordSearched, setWordSearched] = useState('cat');
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    const favoriteVideos = JSON.parse(localStorage.getItem('favoriteVideos'));
    if (favoriteVideos) {
      setFavorites(favoriteVideos);
    }
  }, [setFavorites]);
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <GlobalContext.Provider 
      value={{
        wordSearched, 
        setWordSearched, 
        darkMode, 
        setDarkMode, 
        user, 
        setUser, 
        logout,
        favorites,
        setFavorites,
      }}
    >
      <div className={darkMode ? "dark" : "light" }>
        <AppRouter/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
