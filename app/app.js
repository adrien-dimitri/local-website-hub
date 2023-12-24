// app.js

const express = require('express');
const app = express();
const port = 5000

app.get('/', (req, res) => {
  res.send('Welcome to the Hub!')
});

app.listen(port, () => console.log(`Hub server listening at http://localhost:${port}`));