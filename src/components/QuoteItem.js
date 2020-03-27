import React from 'react';
import { NavLink } from 'react-router-dom';
import { colorForCategory } from '../helpers/quoteHelper';

const QuoteList = props => {
  const { quote } = props
  const quoteColor = colorForCategory(quote.category)

  const style = {
    borderRight: '10px',
    borderRightColor: quoteColor,
    borderRightStyle: 'solid'
  }

  return (
    
    <div key={quote.id} data-id={quote.id} className='quote-container'>
      <NavLink to={`/quotes/${quote.id}`}>
        <div className='quote-image-container' style={style}>
          <img className='all-quote-image' src={quote.image_url} alt=''></img>
        </div>
      </NavLink>
      <p className='quote'>{quote.text}</p>
      <p>{quote.author}</p>
  </div>
  );
}

export default QuoteList;