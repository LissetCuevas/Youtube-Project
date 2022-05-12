import { MainHeader, NavList, IconButton, StyledLink } from './Header.styled';

function Header() {
  return (
    <MainHeader>
      <NavList>
        <IconButton onClick={() => {}}>
          <img src="/assets/icons/dark_mode.svg" alt="search" height="25px"/>
        </IconButton>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/'>Login</StyledLink>
      </NavList>
    </MainHeader>
  );
};

export default Header;
