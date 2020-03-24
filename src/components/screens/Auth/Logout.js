import React, { useState, useEffect } from 'react';
import './Auth.css';
import * as authActions from '../../../store/actions/auth';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

const Logout = (props) => {
  const dispatch = useDispatch();
  const alert = useAlert()

  async function logout() {
    await dispatch(authActions.logout())
  }

  useEffect(() => {
    logout();
    alert.success('Succesfully logged out.')
    props.history.push('/');
  }, []);


  return(
    <div className='auth'>
    </div>
  );
}

export default Logout;