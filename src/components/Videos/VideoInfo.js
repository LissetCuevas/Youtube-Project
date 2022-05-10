import { 
  FlexDiv, 
  Interactions, 
  LikeButton, 
  TextWithIcon, 
  TextWithLineSpaces,
} from "./VideoInfo.styled";

function VideoInfo({snippet, statistics}) {
  const {title, publishedAt, channelTitle, description } = snippet;
  const {viewCount, likeCount, commentCount} = statistics;
  
  return (
    <div>
      <h2>{title}</h2>
      <FlexDiv>
        <div>
          <h4>{channelTitle}</h4>
          <TextWithLineSpaces>{description}</TextWithLineSpaces>
        </div>
        <Interactions>
          <LikeButton>
            <img src="/images/icons/favorite.svg" alt="like"/>
            Like
          </LikeButton>
          <TextWithIcon>
            <img src="/images/icons/visibility.svg" alt="views"/>
            {viewCount}
          </TextWithIcon>
          <TextWithIcon>
            <img src="/images/icons/favorite.svg" alt="favorites"/>
            {likeCount}
          </TextWithIcon>
          <TextWithIcon>
            <img src="/images/icons/comment.svg" alt="comments"/>
            {commentCount}
          </TextWithIcon>
          <p>{publishedAt.substring(0,  publishedAt.indexOf('T'))}</p>
        </Interactions>
      </FlexDiv>
    </div>
  );
}

export default VideoInfo;
