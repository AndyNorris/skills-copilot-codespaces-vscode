// create a web server
// create a route for /comments
// create a route for /comments/:id
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  res.send('This is the comments page')
});

app.get('/comments/:id', (req, res) => {
  res.send(`This is the comment with id ${req.params.id}`)
});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});