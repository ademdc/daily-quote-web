import React from 'react';
import QuoteItem from './QuoteItem';

const QuoteList = props => {
  const { quotes } = props

  return(quotes.map(quote => <QuoteItem key={quote.id} quote={quote}/>));
}

export default QuoteList;