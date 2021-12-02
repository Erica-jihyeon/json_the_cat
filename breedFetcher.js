const args = process.argv.slice(2);
const breedName = args[0];

const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

//request() returns obj
request(url, (error, response, body) => {
  console.log(`error: `, error);
  console.log(body);
  const data = JSON.parse(body);
  //console.log(data);
  console.log(data[0].description);
});
