import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import * as quoteActions from '../../../store/actions/quote';

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
  }

  return(
    <div className="home">
      { quote &&
        (
          <div >
            <p>{quote.text}</p>
            <img src={quote.image_url} alt=''></img>
            <p>{quote.author}</p>
            <button onClick={() => setAsFavorite(quote)}>Set as favorite!</button>
        </div>
        )
      }
    </div>
  );
}

export default Home;