import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'

import LoadingScreen from '../../UI/LoadingScreen';

import * as quoteActions from '../../../store/actions/quote';

import './Home.css';

const Home = props => {
  const token = useSelector(state => state.auth.token);
  const quote = useSelector(state => state.quote.quote);
  const isLoading = useSelector(state => state.quote.isLoading);
  const dispatch = useDispatch();
  const alert = useAlert()

	useEffect(() => {
    const getDailyQuote = async() =>  dispatch(quoteActions.getDailyQuote());
    getDailyQuote()
  }, [dispatch])

  const setAsFavorite = (quote) => {
    dispatch(quoteActions.setFavoriteQuote(quote))
    alert.show('Succesfully set as favorite')
  }

  if(isLoading) {
    return <LoadingScreen />
  }

  return(
    <div className="home">
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