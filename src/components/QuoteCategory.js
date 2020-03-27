import React from 'react';
import { colorForCategory } from '../helpers/quoteHelper';

const QuoteCategory = props => {  
  const style = props.category ? { background: colorForCategory(props.category)} : {} 

  return (
      <div className='quote-category-item' style={style} onClick={()=> props.handleFiltering(props.text)}> 
        <h5>{props.text}: {props.value}</h5> 
      </div>
    );
}

export default QuoteCategory;