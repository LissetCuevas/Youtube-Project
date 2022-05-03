import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import VideoList from './components/Videos/VideosList';
import data from './mocks/youtube-videos-mock';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <VideoList videos={data.items}/>
      </main>
    </Fragment>
  );
}

export default App;
