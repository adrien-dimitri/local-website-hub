const express = require('express');
const app = express();
const port = 3000; // Choose any port you like

app.get('/', (req, res) => {
  res.send('Hello, this is my personal webpage!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});