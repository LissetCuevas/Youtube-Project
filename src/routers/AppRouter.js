import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import NotFound from '../pages/NotFound';
import VideoDetails from '../pages/VideoDetails';
import VideosList from '../pages/VideosList';
import Login from '../pages/Login';
import { MainContainer } from "./AppRouter.styled";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <MainContainer>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/video/:id' element={ <VideoDetails />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<VideosList />}/>
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
