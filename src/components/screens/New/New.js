import React, { useState } from 'react';
import './New.css';
import * as quoteActions from '../../../store/actions/quote';
import { useSelector, useDispatch } from 'react-redux';
import NotAuhtorized from '../../../components/UI/NotAuthorized';
import MasnicaSelect from '../../UI/MasnicaSelect';

import { useAlert } from 'react-alert'

const Auth = (props) => {
  const [category, setCategory] = useState('');
	const [author, setAuthor] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [quoteText, setQuoteText] = useState('');
  const [error, setError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  const alert = useAlert()
	const dispatch = useDispatch();

	const newQuoteHandler = () => {

    let action = quoteActions.newQuote(category, author, quoteText, imageUrl)
    
		setError(null);
		setIsLoading(true)

		dispatch(action)
			.then(response => {
        setIsLoading(false);
        alert.success('Succesfully created new quote.')
        props.history.push('/');
			}).catch(error => {
				setError(error.message);
        setIsLoading(false);
			}) 
    }

    if(user) {
      if(!user.is_admin) {
        return <NotAuhtorized />
      }
    }

    return(
    <div className='new centered-column'>
        <div className='form-group'>
           <MasnicaSelect category={category} onChange={e => setCategory(e.target.value)}/>
          {/* <input className='input' type='text' placeholder='Category' value={category} onChange={e => setCategory(e.target.value)}/> */}
          <input className='input' type='text' placeholder='Author' value={author} onChange={e => setAuthor(e.target.value)}/>
          <textarea cols={10} className='text-area-input' type='text' placeholder='Text' value={quoteText} onChange={e => setQuoteText(e.target.value)}/>
          <input className='input' type='text' placeholder='Image URL' value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
          <button className='button' onClick={newQuoteHandler}>Create new</button>
        </div>
        {imageUrl && (
            <div style={{overflow: 'hidden', height: 'auto', width: '50%'}}>
              <img width='100%' height='100%' src={imageUrl}></img>
           </div>
          )}          
    </div>
   
  );
}

export default Auth;