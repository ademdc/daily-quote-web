import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import * as quoteActions from '../../../store/actions/quote';
import FlashMessage from 'react-flash-message'
import * as svgs from '../../UI/svgs';

const Message = (text) => (
  <FlashMessage duration={5000}>
    <strong>I will disapper in 5 seconds!</strong>
  </FlashMessage>
)
const Home = props => {
  const token = useSelector(state => state.auth.token);
  const quote = useSelector(state => state.quote.quote);
  const dispatch = useDispatch();

  async function getDailyQuote() {
    dispatch(quoteActions.getDailyQuote());
  }

	useEffect(() => {
    getDailyQuote()
  }, [])

  const setAsFavorite = (quote) => {
    dispatch(quoteActions.setFavoriteQuote(quote))
    Message()
  }

  return(
    <div className="home">
      {/* <img height='150px' src={process.env.PUBLIC_URL + '/logo192.png'} alt=''></img> */}
      { quote &&
        (
          <div >
            <p className='quote'>{quote.text}</p>
            <img className='quote-image' src={quote.image_url} alt=''></img>
            <p>{quote.author}</p>
            {token && (
              <button className='favorite-button' onClick={() => setAsFavorite(quote)}>Add to favorites</button>
            )}
            
        </div>
        )
      }
    </div>
  );
}

export default Home;