import React from 'react';
import { quoteCategories } from '../helpers/quoteHelper';
import { filterByCategory } from '../helpers/quoteHelper';

import QuoteCategory from './QuoteCategory';

const QuoteCategories = props => {  
  const activeQuotes = props.quotes.filter(quote => quote.daily_for_date == null)
  
  return (
    <div className={`flex-space-between quote-statistics`}>
      <QuoteCategory key={'all'} text='All' value={props.quotes.length} handleFiltering={props.handleFiltering} />
      {props.hasActive && (<QuoteCategory key={'active'} text='Active' value={activeQuotes.length} handleFiltering={props.handleFiltering} />)}
      
      {Object.values(quoteCategories).map(category => {
        var value = filterByCategory(props.quotes, category).length
        if(value === 0) { return null }

        return (
          <QuoteCategory 
            handleFiltering={props.handleFiltering}
            key={category} 
            text={category} 
            value={value} 
            category={category}
          />
        )
      })}
    </div>
  ); 
}

export default QuoteCategories;