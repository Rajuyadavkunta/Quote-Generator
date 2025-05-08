const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));