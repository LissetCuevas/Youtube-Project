import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/Helpers/Error";
import loginApi from "../mocks/login.api";
import GlobalContext from "../store/GlobalContext";
import { Form, FormContainer } from "./Login.styled";

function Login() {
  const [loginError, setLoginEror] = useState();
  const { user, setUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    
    const userName = event.target.user.value;
    const password = event.target.password.value;
    
    loginApi(userName,password)
    .then( response => {
      setUser(response);
      navigate("/");
    })
    .catch( error => {
      setLoginEror(error.message)
    });
  }
  
  if (user) {
    return (
      <div>
        You are already login, do you want to change account? 
        <Link to='/logout'>Logout</Link> 
      </div>
    )
  }
  return (
    <FormContainer>
      {loginError && 
        <Error message={loginError}/>
      }
      <h1>Login</h1>
      <Form onSubmit={handleSubmitLogin}>
        <label>User</label>
        <input name='user' type='text' />
        <label>Password</label>
        <input name='password' type='password' />
        <button type='submit'>Login</button>
      </Form>
    </FormContainer>
  );
}

export default Login;
