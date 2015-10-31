"use strict";
var request = require('request');

function buildUrls(urls) {
  return `https://graph.facebook.com/?ids=${urls.join(',')}`
}

function facebookResponseToArray(body) {
  let values = JSON.parse(body)
  console.log(values)
  return Object.keys(values).map((key) => values[key])
}

module.exports = {
  fetch(urls) {
    return new Promise((resolve, reject) => {
      request(buildUrls(urls), (error, response, body) => {
        if(response.statusCode === 200) {
          let values = facebookResponseToArray(body)
          resolve({
            facebook: values.reduce((previousCount, value) => {
              if(value.shares)
                return previousCount + value.shares
              else
                return previousCount
            }, 0)
          })
        } else {
          if(!error) error = body
          reject(error)
        }
      })
    })
  }
}
