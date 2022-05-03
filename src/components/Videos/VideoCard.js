import * as Styled from './VideoCard.styled';

function VideoCard({data}) {
  const {title, publishedAt, channelTitle, thumbnails} = data;

  return (
    <Styled.Card>
      <img src={thumbnails.medium.url} alt={title}/>
      <Styled.Title>{title}</Styled.Title>
      <Styled.FlexDiv>
        <p>{channelTitle}</p>
        <p>{publishedAt.substring(0,  publishedAt.indexOf('T'))}</p>
      </Styled.FlexDiv>
    </Styled.Card>
  );
};

export default VideoCard;
