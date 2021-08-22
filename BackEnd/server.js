const e = require('express');
const express = require('express');
const whois = require('whois');

const app = express(),
      bodyParser = require("body-parser");
const port = process.env.PORT || 3080;

const data = [];

app.use(bodyParser.json());

app.get('/backend/data', (req, res) => {
  console.log('/backend/data called!!!!')
  res.json(data);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
})

app.get('/search/:address', searchDomain);

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

function searchDomain (req, res) {
  whois.lookup(req.params.address, (err, data) => {
    if (err) res.send(err);
    else res.send(data);
  })
}