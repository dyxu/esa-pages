const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text/plain; charset=utf-8');
  res.send('Hello, Express server!\n');
});

app.listen(port, () => {
  console.log(`Server running on http://0.0.0.0:${port}/`);
});
