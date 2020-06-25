const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=8a399f240a3b9a7666e315a501dfb6a9&query=37,-200'

request({url: url}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data)
})