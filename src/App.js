import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import VideosList from './pages/VideosList';
import './App.css';
import VideoDetails from './pages/VideoDetails';
import GlobalContext from './store/GlobalContext';
import { useState } from 'react';
import NotFound from './pages/NotFound';

function App() {
  const [search, setSearch] = useState('cat');
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <GlobalContext.Provider value={{search, setSearch, darkMode, setDarkMode}}>
      <BrowserRouter>
        <Header/>
        <main className={darkMode ? "dark" : "light" }>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/video/:id' element={ <VideoDetails />} />
            <Route path='/' element={<VideosList />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
