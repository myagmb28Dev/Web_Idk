import React, { useState } from 'react';
import './Login.css';
import pc from '../../images/pc.jpg';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault(); 
    console.log('Id: ', id);
    console.log('Password: ', '*'.repeat(password.length)); 
  };

  return (
    <div className='App'>
    <div className="container">
      <div className="form-section">
        <h2>로그인</h2>
        <form>
          <label htmlFor="id">Id</label>
          <input 
            type="text" 
            id="id" 
            name="id" 
            required 
            placeholder='id'
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit" onClick={handleClick}>Login</button>
        </form>

        <p>Sign Up <a href="/register">회원가입</a></p>
      </div>
    </div>
    <img id='bg' src={pc} alt="login" />
    </div>
  );
}

export default Login;
