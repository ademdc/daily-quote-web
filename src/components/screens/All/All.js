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
  const [filteredQuotes, setFilteredQuotes] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
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

  const setFilters = (categoryFilter) => {

    let filtered = null

    if(categoryFilter == 'All'){
       filtered = allQuotes
    }else if (categoryFilter == 'Active') {
      filtered = allQuotes.filter(quote => quote.daily_for_date == null)
    }else {
      filtered = allQuotes.filter(quote => quote.category == categoryFilter)
    }
    
    setFilteredQuotes(filtered)
  }

  return(
    <div className="all">
      <div style={{width: '80%', margin: '10px 0px'}}>
        <QuoteCategories quotes={allQuotes} handleFiltering={setFilters} />
      </div>
      <div className='quote-list-container'>
        { filteredQuotes.length > 0 ? (<QuoteList quotes={filteredQuotes}/>) : (<QuoteList quotes={allQuotes}/>) }
      </div>
    </div>
  );
}

export default All;