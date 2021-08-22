const e = require('express');
const express = require('express');
const whois = require('whois');

const app = express(),
      bodyParser = require("body-parser");
const port = process.env.PORT || 3080;

// app.listen(port, () => console.log(`Listening on port ${port}`));

// app.get('/express_backend', (req, res) => {
//     res.send({ express: 'Hello World' });
// });

// place holder for the data
const data = [];

app.use(bodyParser.json());

app.get('/backend/data', (req, res) => {
  console.log('/backend/data called!!!!')
  res.json(data);
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.get('/search', (req, res) => {
  whois.lookup('google.com', (err, data) => {
    if (err) {
      console.log(`Error with request ${req}`);
      res = `Error with request ${req}`;
    }
    else {
      console.log(data);
      res = data;
    }
  })
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});