import { useRef, useContext } from 'react';
import SearchContext from '../../store/searchContext';
import { MainHeader, NavList, IconButton, StyledLink, SearchWrapper } from './Header.styled';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { setSearch }  = useContext(SearchContext);
  const searchInput = useRef('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput.current.value);
    navigate("/");
  }
  
  return (
    <MainHeader>
      <NavList>
        <IconButton onClick={() => {}}>
          <img src="/assets/icons/dark_mode.svg" alt="search" height="25px"/>
        </IconButton>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/'>Login</StyledLink>
      </NavList>
      <SearchWrapper onSubmit={handleSearch}>
        <input ref={searchInput} type="text"/>
        <IconButton type="submit">
          <img src="/assets/icons/search.svg" alt="search" height="25px"/>
        </IconButton>
      </SearchWrapper>
    </MainHeader>
  );
};

export default Header;
