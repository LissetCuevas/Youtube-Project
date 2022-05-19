import { NotFoundContainer } from "./NotFound.styles";

function NotFound(){
  return(
    <NotFoundContainer>
      <h1>404</h1>
      <h2>Sorry, this page was not found</h2>
      <img src="https://cataas.com/cat" alt="Not found"/>
    </NotFoundContainer>
  );
}

export default NotFound;
