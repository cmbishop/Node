var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Portland,us&units=imperial&appid=fd965c932df08319d4a2f28aa32e0747'

request({
    url: url,
    json: true
}, function(error, response, body){
    if(error){
        console.log('Unable to fetch weather.');
    } else {
        console.log('It\'s ' + body.main.temp + ' in ' + body.name + '!');
    }
});

console.log('After request...');