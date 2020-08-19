import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import * as userActions from '../../../store/actions/user';
import * as authActions from '../../../store/actions/auth';

import './User.css';

const User = props => {
  const { id } = useParams()
  const favoriteQuotes = useSelector(state => state.user.favoriteQuotes)
  const viewCounters = useSelector(state => state.user.viewCounters)
	const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      dispatch(authActions.checkAutoLogin())
    }

    tryLogin();
  },[dispatch])

  useEffect(() => {
    const getFavoriteQuotes = async () => {
      dispatch(userActions.getFavoriteQuotes(id))
    }

    const getViewCounters = async () => {
      dispatch(userActions.getViewCounters(id))
    }

    getFavoriteQuotes();
    getViewCounters();
  },[dispatch])
  console.log(viewCounters)
  return(
    <div className='user'>
      <p>User with id: {id}</p>

      {
        favoriteQuotes &&
        (
          <div>
            <p>Favorite quotes</p>
            { favoriteQuotes.map((quote,i) => <p key={i}>{quote}</p>) }
          </div>
        )
      }

      {
        viewCounters &&
        (
          <div>
            <p>View counter</p>
              { viewCounters.map((counter,i) => <p key={i}>{counter.created_at}:: {counter.count}</p>) }
          </div>
        )
      } 
      
    </div>
  )
}

export default User;