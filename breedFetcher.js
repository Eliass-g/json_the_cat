const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const breed = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
if (error !== null) {
  console.log(error);
  process.exit();
}
const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Requested breed is not found.");
    process.exit();
  }
  console.log(data[0].description);
});
