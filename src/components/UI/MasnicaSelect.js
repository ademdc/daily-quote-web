import React from 'react';
import { quoteCategories } from '../../helpers/quoteHelper';

const MasnicaSelect = props => {
  return(
    <select style={style} onChange={props.onChange} value={props.value}>
      {Object.values(quoteCategories).map(category => {
        return (
          <option 
            key={category}
            value={category}>
              {category}
          </option>
        )
      })}
    </select>
  );
}
const style = {
  width: '100%', 
  textAlign: 'center',
  height: '40px'
}
export default MasnicaSelect;