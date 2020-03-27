import React from 'react';
import { filterByCategory } from '../helpers/quoteHelper';

const QuoteCategory = props => {  
  return <h5>{props.category}: {filterByCategory(props.quotes, props.category).length}</h5>;
}

export default QuoteCategory;