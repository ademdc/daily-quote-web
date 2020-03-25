import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';
import QuoteList from '../../QuoteList';

import './Favorites.css';

const Favorites = props => {
  let token = useSelector(state => state.auth.token)
	let favoriteQuotes = useSelector(state => state.quote.favoriteQuotes)

	const dispatch = useDispatch();

  async function getFavQuotes() {
    dispatch(quoteActions.getFavoriteQuotes());
  }

	useEffect(() => {
		if(token) {
    	getFavQuotes()
		}
  }, [])
  
  if(!token) {
    return (
      <div className="centered">
        <p>Log in to see favorites.</p>
      </div>
    )
  }
  return(
    <div className="favorites">
      <QuoteList quotes={favoriteQuotes}/>
    </div>
  );
}

export default Favorites;