import React from 'react';
import { quoteCategories } from '../helpers/quoteHelper';
import QuoteCategory from './QuoteCategory';
import { filterByCategory } from '../helpers/quoteHelper';

const QuoteCategories = props => {  
  const activeQuotes = props.quotes.filter(quote => quote.daily_for_date == null)

  return (
    <div className={`flex-space-between quote-statistics`}>
      <QuoteCategory key={'all'} text='All' value={props.quotes.length} handleFiltering={props.handleFiltering} />
      <QuoteCategory key={'active'} text='Active' value={activeQuotes.length} handleFiltering={props.handleFiltering} />
      {Object.values(quoteCategories).map(category => {
        return (
          <QuoteCategory 
            handleFiltering={props.handleFiltering}
            key={category} 
            text={category} 
            value={filterByCategory(props.quotes, category).length} 
            category={category}
          />
        )
      })}
    </div>
  ); 
}

export default QuoteCategories;