import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import VideosList from './pages/VideosList';
import './App.css';
import VideoDetails from './pages/VideoDetails';
import SearchContext from './store/searchContext';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('cat');
  
  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <BrowserRouter>
        <Header/>
        <main>
          <Routes>
            <Route exact path='/video/:id' element={ <VideoDetails />} />
            <Route exact path='/' element={<VideosList />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;
