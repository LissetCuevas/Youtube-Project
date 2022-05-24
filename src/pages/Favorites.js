import { useContext } from "react";
import VideoCardLarge from "../components/Videos/VideoCardLarge";
import GlobalContext from "../store/GlobalContext";

function Favorites() {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites?.map((video) => (
        <VideoCardLarge key={video.id} data={video.snippet} id={video.id} fav={true}/>
      ))}
    </div>
  );
};

export default Favorites;
