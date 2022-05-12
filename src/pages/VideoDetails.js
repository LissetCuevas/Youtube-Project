import { useParams } from 'react-router-dom';
import LoadingSpinner from '../components/Helpers/LoadingSpiner';
import RelatedVideos from '../components/Videos/RelatedVideos';
import VideoInfo from '../components/Videos/VideoInfo';
import { useFetch } from '../hooks/useFetch';
import { Details, Main } from './VideoDetails.styled';

function VideoDetails() {
  const params = useParams();

  const {isLoading, data, error} = useFetch(
    'https://www.googleapis.com/youtube/v3/videos?' + 
    new URLSearchParams({
      part: [
        "snippet",
        "contentDetails",
        "statistics",
        "player",
      ],
      maxWidth: 850,
      id: params.id,
      key: 'AIzaSyCnaMQkp3rGRfkJpxAeE1CyiVfdWnUG--8',
  }));
  
  if (isLoading) {
    return <LoadingSpinner/>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const videoData = data.items[0];
  
  return (
    <Main>
      <Details>
        <div dangerouslySetInnerHTML={{__html: videoData.player.embedHtml}}/>
        <VideoInfo snippet={videoData.snippet} statistics={videoData.statistics} />
      </Details>
      <RelatedVideos id={params.id}/>
    </Main>
  );
}

export default VideoDetails;
