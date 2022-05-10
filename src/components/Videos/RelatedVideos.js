import { useHTTP } from '../../hooks/use-HTTP';
import VideoCard from './VideoCard';

function RelatedVideos({id}) {
  const {isLoading, data, error} = useHTTP(
    'https://www.googleapis.com/youtube/v3/search?' + 
    new URLSearchParams({
      relatedToVideoId: id,
      type: 'video',
      part: [
        "snippet",
        "id",
      ],
      key: 'AIzaSyCnaMQkp3rGRfkJpxAeE1CyiVfdWnUG--8',
  }));
  
  if (isLoading) {
    return <div>loading..</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const relatedVideos = data.items.filter(video => 
    video.hasOwnProperty('snippet')
  );
  
  console.log(data);
  return(
    <div>
      <h3>Related Videos</h3>
      {relatedVideos.map((video) => 
        <VideoCard key={video.id.videoId} data={video.snippet} id={video.id.videoId}/>
      )}
    </div>
  );
};

export default RelatedVideos;
