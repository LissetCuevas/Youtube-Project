import { MainHeader, NavList, IconButton, Link, SearchWrapper } from './Header.styled';

function Header() {
  return (
    <MainHeader>
      <NavList>
        <IconButton onClick={() => {}}>
          <img src="/images/icons/dark_mode.svg" alt="search" height="25px"/>
        </IconButton>
        <Link href="/">Home</Link>
        <Link href="/">Login</Link>
      </NavList>
      
      <SearchWrapper>
          <input type="text"/>
          <IconButton onClick={() => {}}>
            <img src="/images/icons/search.svg" alt="search" height="25px"/>
          </IconButton>
        </SearchWrapper>
    </MainHeader>
  );
};

export default Header;
