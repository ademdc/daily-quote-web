import React, { useState, useEffect } from 'react';
import './Auth.css';
import * as authActions from '../../../store/actions/auth';
import { useDispatch } from 'react-redux';

const Logout = (props) => {
  const dispatch = useDispatch();

  async function logout() {
    await dispatch(authActions.logout())
  }

  useEffect(() => {
    logout();
    props.history.push('/');
  }, []);


  return(
    <div className='auth'>
    </div>
  );
}

export default Logout;