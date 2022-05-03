import VideoCard from './VideoCard';
import * as Styled from './VideosList.styled';

function VideoList({videos}) {
  return(
    <Styled.List>
      {videos.map( video => 
        <VideoCard key={video.etag} data={video.snippet}/>
      )}
    </Styled.List>
  );
};

export default VideoList;
