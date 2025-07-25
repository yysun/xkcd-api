const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

// Serve the README.html file at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'README.html'));
});

app.get('/api', cors(), async (req, res) => {
  let response = await fetch('https://xkcd.com/info.0.json');
  const current = await response.json();
  const num = Math.floor(Math.random() * current.num) + 1;
  response = await fetch(`https://xkcd.com/${num}/info.0.json`);
  const comic = await response.json();
  res.json(comic);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});