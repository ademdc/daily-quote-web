import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFilters } from '../../../helpers/quoteHelper';

import LoadingScreen from '../../UI/LoadingScreen';
import NotAuhtorized from '../../../components/UI/NotAuthorized';
import QuoteList from '../../QuoteList';
import QuoteCategories from '../../QuoteCategories';
import { NavLink } from 'react-router-dom';

import * as userActions from '../../../store/actions/user';
import * as authActions from '../../../store/actions/auth';

import './Admin.css';

const Admin = props => {
  let users = useSelector(state => state.user.users)

	const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      dispatch(authActions.checkAutoLogin())
    }

    tryLogin();
  },[dispatch])

	useEffect(() => {
    dispatch(userActions.getAllUsers())
      .then(response =>  {} )
      .catch(err => console.log(err));
  }, [dispatch])

  return(
    <div className="admin">
      { users &&
        (
          <div className='quote-list-container'>
            { users.map((user,i) => <NavLink key={i} to={`/user/${user.id}`}>{user.email}</NavLink>) }
          </div>
        )
      }
    </div>

  );
}

export default Admin;