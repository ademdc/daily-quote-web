import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';

import './All.css';

const quoteRendered = (quote) => {
  return (
    <div data-id={quote.id} className='quote-container'>
      <div className='quote-image-container'>
        <img className='all-quote-image' src={quote.image_url} alt=''></img>
      </div>
      <p className='quote'>{quote.text}</p>
      <p>{quote.author}</p>
    </div>
  )
}
const All = props => {
  let token = useSelector(state => state.auth.token)
	let allQuotes = useSelector(state => state.quote.allQuotes)

	const dispatch = useDispatch();

  async function getFavQuotes() {
    dispatch(quoteActions.getAllQuotes());
  }

	useEffect(() => {
		if(token) {
    getFavQuotes()
		}
  }, [])
  
  if(!token) {
    return (
      <div className="all">
        <p>Log in to see favorites.</p>
      </div>
    )
  }
  return(
    <div className="all">
      {allQuotes.map(quote=> quoteRendered(quote))}
    </div>
  );
}

export default All;