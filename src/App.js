import Header from './components/Header/Header';
import VideoList from './components/Videos/VideosList';
import data from './mocks/youtube-videos-mock';
import './App.css';

function App() {
  return (
    <>
      <Header/>
      <main>
        <VideoList videos={data.items}/>
      </main>
    </>
  );
}

export default App;
