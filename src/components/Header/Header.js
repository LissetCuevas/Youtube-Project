import * as Styled from './Header.styled';

function Header() {
  return (
    <Styled.Header>
      <Styled.NavList>
        <Styled.IconButton onClick={() => {}}>
          <img src="/images/icons/dark_mode.svg" alt="search" height="25px"/>
        </Styled.IconButton>
        <Styled.Link href="/">Home</Styled.Link>
        <Styled.Link href="/">Login</Styled.Link>
      </Styled.NavList>
      
      <Styled.SearchWrapper>
          <input type="text"/>
          <Styled.IconButton onClick={() => {}}>
            <img src="/images/icons/search.svg" alt="search" height="25px"/>
          </Styled.IconButton>
        </Styled.SearchWrapper>
    </Styled.Header>
  );
};

export default Header;
