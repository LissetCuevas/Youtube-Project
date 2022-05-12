import { useFetch } from '../../hooks/useFetch';
import LoadingSpinner from '../Helpers/LoadingSpiner';
import VideoCard from './VideoCard';

function RelatedVideos({id}) {
  const {isLoading, data, error} = useFetch(
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
    return <LoadingSpinner/>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const relatedVideos = data.items.filter(video => 
    video.hasOwnProperty('snippet')
  );
  
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
