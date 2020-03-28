import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

import * as authActions from '../../../store/actions/auth';

import './Auth.css';

const Logout = (props) => {
  const dispatch = useDispatch();
  const alert = useAlert()

  useEffect(() => {
    const logout = async() => await dispatch(authActions.logout())
    logout();

    alert.success('Succesfully logged out.')
    props.history.push('/');
  }, [alert, dispatch, props.history]);


  return(
    <div className='auth'>
    </div>
  );
}

export default Logout;