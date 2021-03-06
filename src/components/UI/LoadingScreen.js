import React from 'react';
import '../../styles/spinners.css'

const LoadingScreen = props => {
  // possible types: lds-ellipsis, lds-heart, lds-ripple
  const spinnerType = props.type ? props.type : 'lds-ripple'
  
  return (
    <div className='centered-column'>
      <p>Loading...</p>
      <div className={spinnerType}>
        <div></div><div></div>
      </div>
    </div>
  )
}

export default LoadingScreen;