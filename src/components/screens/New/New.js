import React, { useState } from 'react';
import './New.css';
import * as quoteActions from '../../../store/actions/quote';
import { useSelector, useDispatch } from 'react-redux';

const Auth = (props) => {
  const [category, setCategory] = useState('');
	const [author, setAuthor] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [quoteText, setQuoteText] = useState('');
  const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
  const token = useSelector(state => state.auth.token);
  
	const dispatch = useDispatch();

	const newQuoteHandler = () => {

    let action = quoteActions.newQuote(category, author, quoteText, imageUrl)
    
		setError(null);
		setIsLoading(true)

		dispatch(action)
			.then(response => {
        setIsLoading(false);
        props.history.push('/');
			}).catch(error => {
				setError(error.message);
        setIsLoading(false);
			}) 
    }

  return(
    <div className='new'>
        <div className='form-group'>
          <input className='input' type='text' placeholder='Category' value={category} onChange={e => setCategory(e.target.value)}/>
          <input className='input' type='text' placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)}/>
          <textarea cols={10} className='text-area-input' type='text' placeholder='Text' value={quoteText} onChange={e => setQuoteText(e.target.value)}/>
          <input className='input' type='text' placeholder='Image URL' value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
          <button className='button' onClick={newQuoteHandler}>Create new</button>
        </div>          
    </div>
   
  );
}

export default Auth;