import React, { useState, useEffect } from 'react';
import './Auth.css';
import * as authActions from '../../../store/actions/auth';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Auth = (props) => {
  const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);
	const [isSignup, setIsSignup] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const token = useSelector(state => state.auth.token);
	const dispatch = useDispatch();

	const authHandler = () => {
		let action;
    if (isSignup) {
			console.log('is signup')
      action = authActions.signUp(email, password)
    } else {
			console.log('is signin')
      action = authActions.login(email, password)
    }
    
		
		setError(null);
		setIsLoading(true)

		dispatch(action)
			.then(response => {
				console.log(response)
        setIsLoading(false);
        props.history.push('/');
			}).catch(error => {
				console.log('IN CATCH OF DISPATCH auth actions')
				setError(error.message);
				console.log(error.message)
        setIsLoading(false);
        console.log('--------------------aakdad=---------')
			}) 
    }

  return(
    <div className='auth'>
      <p>{token}</p>
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