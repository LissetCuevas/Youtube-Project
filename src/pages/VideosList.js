import VideoCard from '../components/Videos/VideoCard';
import { List, SearchWrapper, IconButton } from './VideosList.styled';
import { useHTTP } from '../hooks/use-HTTP';
import { useRef, useState } from 'react';

function VideoList() {
  const [search, setSearch] = useState('');
  const searchInput = useRef('');
  
  const {isLoading, data , error} = useHTTP(
    'https://www.googleapis.com/youtube/v3/search?' + 
    new URLSearchParams({
      part: [
        "snippet",
        "id",
      ],
      q: search,
      type: "video",
      chart: "mostPopular",
      maxResults: 50,
      key: 'AIzaSyCnaMQkp3rGRfkJpxAeE1CyiVfdWnUG--8',
    })
  );
  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput.current.value);
  }
  
  if (isLoading) {
    return <div>loading..</div>
  }
  
  if (error) {
    return <div>Error: {error}</div>
  }
  
  return(
    <div>
      <SearchWrapper>
        <input ref={searchInput} type="text"/>
        <IconButton onClick={handleSearch}>
          <img src="/images/icons/search.svg" alt="search" height="25px"/>
        </IconButton>
      </SearchWrapper>
      <List>
      {data.items.map( video => 
        <VideoCard key={video.etag} data={video.snippet} id={video.id.videoId}/>
      )}
    </List>
    </div>
  );
};

export default VideoList;
