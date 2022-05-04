import { Card, Title, FlexDiv } from './VideoCard.styled';

function VideoCard({data}) {
  const {title, publishedAt, channelTitle, thumbnails} = data;

  return (
    <Card>
      <img src={thumbnails.medium.url} alt={title}/>
      <Title>{title}</Title>
      <FlexDiv>
        <p>{channelTitle}</p>
        <p>{publishedAt.substring(0,  publishedAt.indexOf('T'))}</p>
      </FlexDiv>
    </Card>
  );
};

export default VideoCard;
