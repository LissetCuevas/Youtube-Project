import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import VideosList from './pages/VideosList';
import './App.css';
import VideoDetails from './pages/VideoDetails';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<VideosList />} />
          <Route path='/video/:id' element={ <VideoDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
