import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../store/GlobalContext';
import VideoCard from './VideoCard';

function MoreFavorites({id}) {
  const { favorites } = useContext(GlobalContext);
  
  const otherFavorites = favorites.filter(video => video.id !== id).slice(0, 4);;
  
  return(
    <div>
      <h3>More favorite videos</h3>
      {otherFavorites.length > 0
        ? otherFavorites.map((video) => 
          <VideoCard key={video.id} data={video.snippet} id={video.id} fav={true}/>)
        : <p>Add more <Link to='/'>favorites</Link></p>
      }
    </div>
  );
};

export default MoreFavorites;
