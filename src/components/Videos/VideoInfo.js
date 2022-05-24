import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../store/GlobalContext";
import { 
  FlexDiv, 
  Interactions, 
  LikeButton, 
  TextWithIcon, 
  TextWithLineSpaces,
} from "./VideoInfo.styled";

function VideoInfo({snippet, statistics, id}) {
  const { favorites, setFavorites, user } = useContext(GlobalContext);
  const navigate = useNavigate();
  const {title, publishedAt, channelTitle, description } = snippet;
  const {viewCount, likeCount, commentCount} = statistics;
 
  const videoIsFavorite = (id) => favorites.some(video => video.id === id);
  const removeVideo = (id) => favorites.filter((video) => video.id !== id);
  
  const saveFavoriteVideo = () => {
    if (!user) { 
      navigate("/login");
      return;
    }
    
    if (videoIsFavorite(id)) {
      setFavorites(removeVideo(id));
    } else {
      const video = {snippet, statistics, id};
      setFavorites([...favorites, video]);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  return (
    <div>
      <h2>{title}</h2>
      <FlexDiv>
        <div>
          <h4>{channelTitle}</h4>
          <TextWithLineSpaces>{description}</TextWithLineSpaces>
        </div>
        <Interactions>
          <LikeButton onClick={saveFavoriteVideo} favorite={videoIsFavorite(id)}>
            <img src="/assets/icons/favorite.svg" alt="like"/>
            {videoIsFavorite(id) ? 'Liked' : 'Like'}
          </LikeButton>
          <TextWithIcon>
            <img src="/assets/icons/visibility.svg" alt="views"/>
            {viewCount}
          </TextWithIcon>
          <TextWithIcon>
            <img src="/assets/icons/favorite.svg" alt="favorites"/>
            {videoIsFavorite(id) ? parseInt(likeCount)+1 : likeCount}
          </TextWithIcon>
          <TextWithIcon>
            <img src="/assets/icons/comment.svg" alt="comments"/>
            {commentCount}
          </TextWithIcon>
          <p>{publishedAt.substring(0,  publishedAt.indexOf('T'))}</p>
        </Interactions>
      </FlexDiv>
    </div>
  );
}

export default VideoInfo;
