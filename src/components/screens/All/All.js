import React, { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';
import NotAuhtorized from '../../../components/UI/NotAuthorized';

import './All.css';

const quoteRendered = (quote) => {
  return (
    <div key={quote.id} data-id={quote.id} className='quote-container'>
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
  const user = useSelector(state => state.auth.user);

	const dispatch = useDispatch();

  async function getAllQuotes() {
    dispatch(quoteActions.getAllQuotes());
  }

	useEffect(() => {
		if(token && user && user.is_admin) {
      getAllQuotes()
		}
  }, [])

  if(user) {
    if(!user.is_admin) {
      return <NotAuhtorized />
    }
  }

  return(
    <div className="all">
      {allQuotes.map(quote => quoteRendered(quote))}
    </div>
  );
}

export default All;