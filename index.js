const fetchBreedDescription = require("./breedFetcher");
const args = process.argv;
const breed = args[2];

fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (description.length === 0) {
    console.log("Requested breed is not found.");
  } else {
    console.log(description[0].description);
  }
});