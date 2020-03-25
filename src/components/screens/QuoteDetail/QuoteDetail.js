import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAlert } from 'react-alert';
import './QuoteDetail.css';

import * as quoteActions from '../../../store/actions/quote';

const QuoteDetail = props => {
  const { id } = useParams()
  const currentQuote = useSelector(state => state.quote.currentQuote);
  const [newCategory, setNewCategory] = useState('');
	const [newAuthor, setNewAuthor] = useState('');
	const [newQuoteText, setNewQuoteText] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('')
  const [editedQuote, setEditedQuote] = useState(null)
  const dispatch = useDispatch();
  const alert = useAlert()

  useEffect(() => {
    dispatch(quoteActions.getQuote(id))
  },[])

  useEffect(() => {
    setEditedQuote({...currentQuote})
  }, [currentQuote])

  const editQuoteHandler = async () => {
    const { id, category, author, text, image_url } = editedQuote

    await dispatch(quoteActions.updateQuote(id, category, author, text, image_url))
    alert.success('Successfully edited quote.')
    props.history.push('/quotes')
  }
  const setDailyHandler = async () => {
    await dispatch(quoteActions.setNewDailyQuote(currentQuote.id))
    alert.success('Successfully set quote as daily.')
    props.history.push('/')
  }

  const deleteQuoteHandler = async () => {
    await dispatch(quoteActions.deleteQuote(currentQuote.id))
    alert.success('Successfully deleted quote.')
    props.history.push('/quotes')
  }

  return(
    <div className='centered-column'>
      {currentQuote && editedQuote && (
        <Fragment>
          <div style={{overflow: 'hidden', height: 'auto', width: '50%'}}>
            <img width='100%' height='100%' src={editedQuote.image_url}></img>
          </div>
          
          <div className='form-group' style={{width: '50%'}}>
            <input 
              className='input' 
              type='text' 
              value={editedQuote.category} 
              onChange={(e) => {
                const value = e.target.value
                setEditedQuote(prevState => ({...prevState, category: value }))} 
              }
            />
            <input 
              className='input' 
              type='text' 
              value={editedQuote.author} 
              onChange={(e) => {
                const value = e.target.value
                setEditedQuote(prevState => ({...prevState, author: value }))} 
              }
            />

            <textarea 
              cols={10} 
              className='text-area-input' 
              type='text' value={editedQuote.text} 
              onChange={(e) => {
                const value = e.target.value
                setEditedQuote(prevState => ({...prevState, text: value }))} 
              }
            />
            <input 
              className='input' 
              type='text' 
              value={editedQuote.image_url} 
              onChange={(e) => {
                const value = e.target.value
                setEditedQuote(prevState => ({...prevState, image_url: value }))} 
              } 
            />
            <button className='button' onClick={editQuoteHandler}>Save</button>
            <button className='button' onClick={setDailyHandler}>Set as Daily</button>
            <button style={{backgroundColor: 'red'}} className='button' onClick={deleteQuoteHandler}>Delete</button>
          </div>  
        </Fragment>
        
      )}
    </div>
  );
}

export default QuoteDetail;