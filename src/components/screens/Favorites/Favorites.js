import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';
import QuoteList from '../../QuoteList';
import QuoteCategories from '../../QuoteCategories';
import { setFilters } from '../../../helpers/quoteHelper';
import { useAlert } from 'react-alert'
import LoadingScreen from '../../UI/LoadingScreen';

import './Favorites.css';

const Favorites = props => {
  let token = useSelector(state => state.auth.token)
  let favoriteQuotes = useSelector(state => state.quote.favoriteQuotes)
  const isLoading = useSelector(state => state.quote.isLoading);
  const [filteredQuotes, setFilteredQuotes] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const alert = useAlert()
	const dispatch = useDispatch();

	useEffect(() => {
		if(token) {
      dispatch(quoteActions.getFavoriteQuotes())
        .then(response => {} )
        .catch(err =>  { console.log(err) } );
		}
  }, [token])

  const setFiltersHandler = (categoryFilter) => {
    const filtered = setFilters(favoriteQuotes, categoryFilter)
    if(filtered.length == 0) {
      alert.info('No filtered results.')
    }
    setFilteredQuotes(filtered)
  }
  
  if(isLoading) {
    return <LoadingScreen type='lds-heart' />
  }

  if(!token) {
    return (
      <div className="centered">
        <p>Log in to see favorites.</p>
      </div>
    )
  }
  return(
    <div className="favorites">
      <div style={{width: '80%', margin: '10px 0px'}}>
        <QuoteCategories quotes={favoriteQuotes} handleFiltering={setFiltersHandler} />
      </div>
      { filteredQuotes.length > 0 ? (<QuoteList quotes={filteredQuotes}/>) : (<QuoteList quotes={favoriteQuotes}/>) }
    </div>
  );
}

export default Favorites;