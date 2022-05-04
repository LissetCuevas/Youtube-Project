import VideoCard from './VideoCard';
import { List } from './VideosList.styled';

function VideoList({videos}) {
  return(
    <List>
      {videos.map( video => 
        <VideoCard key={video.etag} data={video.snippet}/>
      )}
    </List>
  );
};

export default VideoList;
