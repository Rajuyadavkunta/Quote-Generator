import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchQuote = async () => {
    const res = await fetch('https://quote-generator-gudq.onrender.com/api/quote');
    const data = await res.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <div className="quote-box">
        <p className="quote-text">"{quote.text}"</p>
        <p className="quote-author">- {quote.author}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
     
    </div>
  );
}

export default App;
