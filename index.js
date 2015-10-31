"use strict";

let express = require('express')
let API = require('./api')

let app = express()

app.get('/', function(req, res) {
  if (!req.query.url && !req.query.urls) {
    res.status(500).send('You must provide a `url` or `urls` paramater.\n'
             + 'like: `/?urls=http://www.google.com,http://www.github.com`\n'
             + 'or: `/?url=http://www.google.com`'
             )
  }

  let url = req.query.url
  let urls = req.query.urls.split(',') || [url]
  let networks = req.query.networks || ['twitter', 'facebook', 'linkedin', 'googleplus']

  let promises = []
  networks.forEach(function(network) {
    promises.push(API.fetch(network, urls))
  });

  Promise.all(promises).then(function(values) {
    res.status(200).send(
      values.filter((value) => value !== null)
    )
  }).catch(function(error) {
    res.status(500).send(error)
  })


});

let port = process.env.PORT || 8000
let server = app.listen(port, function() {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Social media counter started and listening at http://%s:%s', host, port)
})
