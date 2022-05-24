import { Link } from 'react-router-dom';
import { Card, Title, FlexDiv } from './VideoCard.styled';

function VideoCardLarge({data, id, fav}) {
  const {title, publishedAt, channelTitle, thumbnails, description} = data;

  return (
    <Card large={true}>
      <FlexDiv>
        <img src={thumbnails.medium.url} alt={title}/>
        <div>
          <Title>
            <Link to={fav ? `/favorite/${id}` : `/video/${id}`}>
              {title}
            </Link>
          </Title>
          <p>{description}</p>
          <FlexDiv>
            <p>{channelTitle}</p>
            <p>{publishedAt.substring(0,  publishedAt.indexOf('T'))}</p>
          </FlexDiv>
        </div>
      </FlexDiv>
    </Card>
  );
};

export default VideoCardLarge;
