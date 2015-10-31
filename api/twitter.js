"use strict";
var request = require('request');

function buildUrl(url) {
  return `https://cdn.api.twitter.com/1/urls/count.json?url=${url}`
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    request(buildUrl(url), (error, response, body) => {
      if(response.statusCode === 200) {
        resolve(JSON.parse(body))
      } else {
        if(!error) error = body
        reject(error)
      }
    })
  })
}

module.exports = {
  fetch(urls) {
    return new Promise((resolve, reject) => {
      let promises = urls.map(url => fetchUrl(url) )
      Promise.all(promises).then((values) => {
        resolve({
          twitter: values.reduce((previousCount, value) => {
            return previousCount + value.count
          }, 0)
        })
      })
    })
  }
}
