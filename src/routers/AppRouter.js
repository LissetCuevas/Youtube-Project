import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import NotFound from '../pages/NotFound';
import VideoDetails from '../pages/VideoDetails';
import VideosList from '../pages/VideosList';
import Login from '../pages/Login';
import { MainContainer } from "./AppRouter.styled";
import Favorites from "../pages/Favorites";
import Protected from "../components/Helpers/Protected";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <MainContainer>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/video/:id' element={<VideoDetails />} />
          <Route path='/favorites' element={<Protected><Favorites /></Protected>}/>
          <Route 
            path='/favorite/:id' 
            element={
              <Protected>
                <VideoDetails favorite={true}/>
              </Protected>
            } 
          />
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<VideosList />}/>
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
