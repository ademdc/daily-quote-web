import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert'

import NotAuhtorized from '../../../components/UI/NotAuthorized';
import MasnicaSelect from '../../UI/MasnicaSelect';
import LoadingScreen from '../../UI/LoadingScreen';

import * as quoteActions from '../../../store/actions/quote';

import './New.css';

const Auth = (props) => {
  const [category, setCategory] = useState('Love');
	const [author, setAuthor] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [quoteText, setQuoteText] = useState('');
  const user = useSelector(state => state.auth.user);
  const isLoading = useSelector(state => state.quote.isLoading);
  const alert = useAlert()
	const dispatch = useDispatch();

	const newQuoteHandler = () => {
    let action = quoteActions.newQuote(category, author, quoteText, imageUrl)

		dispatch(action)
			.then(response => {
        alert.success('Succesfully created new quote.')
        props.history.push('/');
			}).catch(error => {
        alert.error(error.message)
			}) 
    }

    if(user) {
      if(!user.is_admin) {
        return <NotAuhtorized />
      }
    }

    if(isLoading) {
      return <LoadingScreen />
    }

    return(
      <div className='new centered-column'>
          <div className='form-group'>
            <MasnicaSelect category={category} onChange={e => setCategory(e.target.value)}/>
            <input className='input' type='text' placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)}/>
            <textarea cols={10} className='text-area-input' type='text' placeholder='Text' value={quoteText} onChange={e => setQuoteText(e.target.value)}/>
            <input className='input' type='text' placeholder='Image URL' value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
            <button className='button' onClick={newQuoteHandler}>Create new</button>
          </div>
          {imageUrl && (
              <div style={{overflow: 'hidden', height: 'auto', width: '50%'}}>
                <img width='100%' height='100%' src={imageUrl} alt=''></img>
            </div>
            )}          
      </div>
   
  );
}

export default Auth;