const request = require('request');

// const url = `https://api.thecatapi.com/v1/breeds/search?q=sib`;
// //request() returns obj
// request(url, (error, response, body) => {
//   console.log(`error: `, error);
//   console.log(body);
//   const data = JSON.parse(body);
//   //console.log(data);
//   console.log(data[0].description);
// });


//using callback #1
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error || breedName === undefined) {
      if (error) callback(error, null);
      else callback(null, 'Error: no name');
    }
    callback(null, JSON.parse(body)[0].description);
  });
};

// const printDescription = (error, description) => {
//   console.log(description);
// }
// fetchBreedDescription('Siberian', printDescription)

module.exports = { fetchBreedDescription };