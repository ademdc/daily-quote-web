import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

import * as authActions from '../../../store/actions/auth';

import './Auth.css';

const Auth = (props) => {
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSignup, setIsSignup] = useState(false);
  const alert = useAlert()
	const dispatch = useDispatch();

	const authHandler = () => {
		let action;
    if (isSignup) {
      action = authActions.signUp(email, password)
    } else {
      action = authActions.login(email, password)
    }
    
		dispatch(action)
			.then(response => {
        alert.success('Successfully authenticated.')
        props.history.push('/');
			}).catch(error => {
        alert.error(error.message)
			}) 
  }

  return(
    <div className='auth'>
      <div className='form-group'>
        <input className='input' type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input className='input' type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button className='button' onClick={authHandler}>{isSignup ? 'SIGNUP' : 'SIGNIN'}</button>
      </div>
      <button
        className='button'
        onClick={() => setIsSignup(prevState => !prevState)}
        >SWITCH TO {isSignup ? 'SIGNIN' : 'SIGNUP'}
      </button>
    </div>
  );
}

export default Auth;