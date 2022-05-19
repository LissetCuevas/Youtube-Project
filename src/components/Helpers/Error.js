import { Container } from "./Error.styled";

function Error({message}) {
  return(
    <Container>
      <img src="/assets/sad_cat.jpeg" alt="error"/>
      <div>
        <h3>Something went wrong :(</h3>
        <div dangerouslySetInnerHTML={{__html: message}}/>
      </div>
    </Container>
  );
}

export default Error;
