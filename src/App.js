import './App.css';
import GlobalContext from './store/GlobalContext';
import { useState } from 'react';
import { AppRouter } from './routers/AppRouter';

function App() {
  const [wordSearched, setWordSearched] = useState('cat');
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <GlobalContext.Provider value={{wordSearched, setWordSearched, darkMode, setDarkMode}}>
      <div className={darkMode ? "dark" : "light" }>
        <AppRouter/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
