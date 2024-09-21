import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, registerRequest } from '../store/actions/authAction';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { error, token } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();


  useEffect(() => {

    if (token) {
      navigate('/game');
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginRequest({ name: username, password }));
    } else {
      dispatch(registerRequest({ name: username, password }));
    }
  };

  return (
    <div>
      <div className='center-div'>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit} className='mt-2 mb-2' >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input type="submit" name="submit" value={isLogin ? 'Login' : 'Register'} />
        </form>
        <p>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
