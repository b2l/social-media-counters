"use strict";

let twitter = require('./api/twitter');
let facebook = require('./api/facebook');
// let linkedin = require('./api/linkedin');
// let googleplus = require('./api/googleplus');

var socialnetworks = {
  'twitter': twitter,
  'facebook': facebook
}

module.exports = {
  fetch(network, urls) {
    if (undefined !== socialnetworks[network]) {
      console.log(`fetching share for ${network}`)
      return socialnetworks[network].fetch(urls)
    }
    return null
  }
}
