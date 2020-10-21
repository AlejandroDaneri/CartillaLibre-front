import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {LoginWrapper} from "../styles/LoginWrapper";

const Login = () => {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <LoginWrapper>
      <h2>Login</h2>
      <input
        name='username'
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder='Username'
      />
      <input
        name='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        type='password'
        placeholder='Password'
      />
      <Link to='/medics'>
        <Button
          variant='contained'
          style={{ backgroundColor: "gray" }}
        >
          Ingresar
        </Button>
      </Link>
    </LoginWrapper>
  );
}

export default Login;
