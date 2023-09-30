const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const description = JSON.parse(body);
    callback(error, description);
  });
};

module.exports = fetchBreedDescription;