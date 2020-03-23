import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    console.log('inside');

    axios.get('https://afternoon-harbor-81797.herokuapp.com/quotes/daily')
			.then(quote => {
        setQuote(quote.data)
			})
			.catch(error => {
				console.log(error)
		  })
  }, [])


  return (
    <div className="App">
      <Navbar />
      { quote &&
        (
          <header className="App-header">
          <p>{quote.text}</p>
          <img src={quote.image_url} alt=''></img>
          <p>{quote.author}</p>
        </header>
        )
      }
    </div>
  );
}

export default App;
