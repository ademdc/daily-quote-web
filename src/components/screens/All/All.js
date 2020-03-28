import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFilters } from '../../../helpers/quoteHelper';
// import { currentLink, pageLink } from '../../../contants/configuration';

// import Pagination from 'pagination-component';
import LoadingScreen from '../../UI/LoadingScreen';
import NotAuhtorized from '../../../components/UI/NotAuthorized';
import QuoteList from '../../QuoteList';
import QuoteCategories from '../../QuoteCategories';

import * as quoteActions from '../../../store/actions/quote';

import './All.css';

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
  }, [token, dispatch])

  
  if(user) {
    if(!user.is_admin) {
      return <NotAuhtorized />
    }
  }

  const setFiltersHandler = (categoryFilter) => {
    const filtered = setFilters(allQuotes, categoryFilter)
    setFilteredQuotes(filtered)
  }

  // const changePage = (page) => {
  //   console.log(page)
  // }

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