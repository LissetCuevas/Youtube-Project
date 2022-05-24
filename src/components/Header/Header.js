import { useRef, useContext } from 'react';
import GlobalContext from '../../store/GlobalContext';
import { 
  MainHeader, 
  NavList, 
  IconButton, 
  StyledLink, 
  SearchWrapper, 
  StyledButton,
} from './Header.styled';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { setWordSearched, darkMode, setDarkMode, user, logout }  = useContext(GlobalContext);
  const searchInput = useRef('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    setWordSearched(searchInput.current.value);
    navigate("/");
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    setDarkMode(darkMode ? false : true);
  }
  
  return (
    <MainHeader>
      <NavList>
        <IconButton onClick={handleClick}>
          <img 
            src={darkMode ? "/assets/icons/light_mode.svg" : "/assets/icons/dark_mode.svg"}
            alt={darkMode ? "lightMode" : "darkMode"}
            height="25px"
          />
        </IconButton>
        <StyledLink to='/'>Home</StyledLink>
        { user ? 
          <>
            <StyledLink to='/favorites'>Favorites</StyledLink>
            <StyledButton onClick={logout}>Logout</StyledButton>
          </>
          : <StyledLink to='/login'>Login</StyledLink>
        }
        
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
