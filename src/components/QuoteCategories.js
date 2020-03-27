import React from 'react';
import { quoteCategories } from '../helpers/quoteHelper';
import QuoteCategory from './QuoteCategory';

const QuoteCategories = props => {  
  return (
    <div className={`flex-space-between quote-statistics`}>
      <h5>All: {props.quotes.length}</h5>
      <h5>Active: {props.quotes.filter(quote => quote.daily_for_date == null).length}</h5>
      {Object.values(quoteCategories).map(category => {
        return <QuoteCategory key={category} text={category} category={category} quotes={props.quotes}/>
      })}
    </div>
  );
}

export default QuoteCategories;