import React, { useState, useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as quoteActions from '../../../store/actions/quote';
import NotAuhtorized from '../../../components/UI/NotAuthorized';
import './All.css';
import QuoteList from '../../QuoteList';
import QuoteCategories from '../../QuoteCategories';
import { setFilters } from '../../../helpers/quoteHelper';
import Pagination from 'pagination-component';
import { css } from 'glamor';
import LoadingScreen from '../../UI/LoadingScreen';

const All = props => {
  let token = useSelector(state => state.auth.token)
  let allQuotes = useSelector(state => state.quote.allQuotes)
  const isLoading = useSelector(state => state.quote.isLoading);
  const [filteredQuotes, setFilteredQuotes] = useState([])
  const user = useSelector(state => state.auth.user);

	const dispatch = useDispatch();

	useEffect(() => {
		if(token) {
      dispatch(quoteActions.getAllQuotes())
        .then(response =>  {} )
        .catch(err => console.log(err));
    }
  }, [token])

  
  if(user) {
    if(!user.is_admin) {
      return <NotAuhtorized />
    }
  }

  const setFiltersHandler = (categoryFilter) => {
    const filtered = setFilters(allQuotes, categoryFilter)
    setFilteredQuotes(filtered)
  }

  const changePage = (page) => {
    console.log(page)
  }
  
  const pageLink = css({
    margin: '2px',
    display: 'inline-block',
    padding: '2px',
    WebkitBorderRadius: '20px',
    MozBorderRadius: '20px',
    borderRadius: '20px'
  })
  
  const currentLink = css({
    backgroundColor: 'lightblue',
    display: 'inline-block',
    color: '#FFFFFF',
    'a:link': { color: '#FFFFFF' },
    'a:visited': { color: '#FFFFFF' },
    'a:active': { color: '#FFFFFF' }
  })

  if(isLoading) {
    return <LoadingScreen /> 
  }
  return(
    <div className="all">
      {/* <Pagination currentPage={0}
                 pageCount={10}
                 pageLinkClassName={pageLink}
                 currentLinkClassName={currentLink}
                 onPageClick={i => {
                  console.log(`Link to page ${i} was clicked.`);
                 }} /> */}
      <div style={{width: '80%', margin: '10px 0px'}}>
        <QuoteCategories quotes={allQuotes} handleFiltering={setFiltersHandler} hasActive={true}/>
      </div>
      <div className='quote-list-container'>
        { filteredQuotes.length > 0 ? (<QuoteList quotes={filteredQuotes}/>) : (<QuoteList quotes={allQuotes}/>) }
      </div>
    </div>
  );
}

export default All;