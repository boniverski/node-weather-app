const request = require('request');
const argv = require('yargs').argv;

let apiKey = '8af5bf9da51fce9c57105a1cb4527851';
let city = argv.c || 'belgrade';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let temp = Math.floor(weather.main.temp);
    let message = `It's ${temp}\u00B0C degrees in ${weather.name}!`;
    console.log(message);
  }
})
