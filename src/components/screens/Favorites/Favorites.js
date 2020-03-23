import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';

import './Favorites.css';

const favoriteQuote = (quote) => {
  return (
    <div>
      <p>{quote.author}</p>
      <img height='300px' src={quote.image_url} alt=''></img>
      <p>{quote.text}</p>
    </div>
  )
}
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
      <div className="favorites">
        <p>Log in to see favorites.</p>
      </div>
    )
  }
  return(
    <div className="favorites">
      {favoriteQuotes.map(quote=> favoriteQuote(quote))}
    </div>
  );
}

export default Favorites;