import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    console.log('inside');

    axios.get('https://afternoon-harbor-81797.herokuapp.com/quotes/daily')
			.then(quote => {
        setQuote(quote.data)
			})
			.catch(error => {
				console.log(error)
				return false;
		  })
  }, []) 
    
  console.log(quote)
  return (
    <div className="App">
      <header className="App-header">
        <p>{quote.text}</p>
        <img src={quote.image_url}></img>
        <p>{quote.author}</p>
      </header>
    </div>
  );
}

export default App;
