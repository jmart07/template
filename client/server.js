const express = require('express');
const app = express();
const path = require('path');

const port = 8000;

app.get('*', (req, res) => {
  console.log(`this is path: ${path.join('')}`);
  res.sendFile(path.join(`${__dirname}/assets/index.html`))
});

app.listen(port, (req, res) => {
  console.log(`Shh, I'm listening on port ${port}`);
});
