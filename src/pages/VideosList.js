import VideoCard from '../components/Videos/VideoCard';
import { List } from './VideosList.styled';
import { useFetch } from '../hooks/useFetch';
import { useContext } from 'react';
import GlobalContext from '../store/GlobalContext';
import LoadingSpinner from '../components/Helpers/LoadingSpiner';
import Error from '../components/Helpers/Error';

function VideoList() {
  const { wordSearched } = useContext(GlobalContext);
  
  const {isLoading, data , error} = useFetch(
    'https://www.googleapis.com/youtube/v3/search?' + 
    new URLSearchParams({
      part: [
        "snippet",
        "id",
      ],
      q: wordSearched,
      type: "video",
      chart: "mostPopular",
      maxResults: 50,
      key: 'AIzaSyCnaMQkp3rGRfkJpxAeE1CyiVfdWnUG--8',
    })
  );
  
  if (isLoading) {
    return <LoadingSpinner />
  }
  
  if (error) {
    return <Error message={error.message}/>
  }
  
  return(
    <div>
      <List>
        {data.items.map( video => 
          <VideoCard key={video.etag} data={video.snippet} id={video.id.videoId}/>
        )}
      </List>
    </div>
  );
};

export default VideoList;
