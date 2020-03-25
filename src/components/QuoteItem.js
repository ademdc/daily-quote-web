import React from 'react';
import { NavLink } from 'react-router-dom';

const QuoteList = props => {
  const { quote } = props
  
  return(
    <div key={quote.id} data-id={quote.id} className='quote-container'>
    <NavLink to={`/quotes/${quote.id}`}>
      <div className='quote-image-container'>
        <img className='all-quote-image' src={quote.image_url} alt=''></img>
      </div>
    </NavLink>
    <p className='quote'>{quote.text}</p>
    <p>{quote.author}</p>
  </div>
  );
}

export default QuoteList;