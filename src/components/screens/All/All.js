import React, { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';
import NotAuhtorized from '../../../components/UI/NotAuthorized';
import './All.css';
import QuoteList from '../../QuoteList';
import QuoteCategories from '../../QuoteCategories';

const All = props => {
  let token = useSelector(state => state.auth.token)
	let allQuotes = useSelector(state => state.quote.allQuotes)
  const user = useSelector(state => state.auth.user);

	const dispatch = useDispatch();

  async function getAllQuotes() {
    await dispatch(quoteActions.getAllQuotes());
  }

	useEffect(() => {
		if(token) {
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
      <div style={{width: '80%'}}>
        <hr />
        <QuoteCategories quotes={allQuotes} />
        <hr />
      </div>
      <div className='quote-list-container'>
        <QuoteList quotes={allQuotes}/>
      </div>
    </div>
  );
}

export default All;