import { useParams } from 'react-router-dom';
import Error from '../components/Helpers/Error';
import LoadingSpinner from '../components/Helpers/LoadingSpiner';
import MoreFavorites from '../components/Videos/MoreFavorites';
import RelatedVideos from '../components/Videos/RelatedVideos';
import VideoInfo from '../components/Videos/VideoInfo';
import { useFetch } from '../hooks/useFetch';
import { Details, Main } from './VideoDetails.styled';

function VideoDetails({favorite}) {
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
    return <Error message={error.message}/>
  }
  
  const videoData = data.items[0];
  
  return (
    <Main>
      <Details>
        <div dangerouslySetInnerHTML={{__html: videoData.player.embedHtml}}/>
        <VideoInfo snippet={videoData.snippet} statistics={videoData.statistics} id={params.id}/>
      </Details>
      {favorite 
        ? <MoreFavorites id={params.id}/>
        : <RelatedVideos id={params.id}/>
      }
      
    </Main>
  );
}

export default VideoDetails;
