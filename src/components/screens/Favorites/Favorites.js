import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';

import './Favorites.css';

const favoriteQuote = (quote) => {
  return (
    <div data-id={quote.id} key={quote.id} className='quote-container'>
      <div className='quote-image-container'>
        <img className='all-quote-image' src={quote.image_url} alt=''></img>
      </div>
      <p className='quote'>{quote.text}</p>
      <p>{quote.author}</p>
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
      <div className="centered">
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